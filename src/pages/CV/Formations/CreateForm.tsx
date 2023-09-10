import { Box, Button } from "@mui/material";
import CustomTextfield from "../../../components/CustomTextfield/CustomTextfield";
import {
  OffWhiteLight,
  White,
  sidebarItemClicked,
} from "../../../assets/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { setNewPage } from "../../../redux/features/category/CategorySlice";
import CustomButtonGroup from "../../../components/CustomButtonGroup/CustomButtonGroup";
import useFormState from "../../../hooks/useFormState";
import { IFormation } from "../../../typescript/formation";
import _ from "lodash";
import CustomDate from "../../../components/CustomDate/CustomDate";
import dateFormat from "dateformat";
import supabase from "../../../configs/supabase";
import { getSessionToken } from "../../../redux/features/login/LoginSlice";
import ErrorModal from "../../../components/Modal/ErrorModal";
import { generateInt8Id } from "../../../utils/utils";

const CreateForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector(getSessionToken);

  const [openErrorModal, setOpenErrorModal] = useState(false);

  const { attributes, handleInputChange, errors } = useFormState<IFormation>({
    initialAttributes: {
      title: "",
      description: "",
      in_progress: true,
      city: "Dakar",
      country: "Senegal",
      school: "",
      start_year: new Date(Date.now()).getFullYear(),
    },
    validate: ({ attributes }) => {
      const errors: any = {};

      if (_.isEmpty(attributes.title)) {
        errors["title"] = "Le titre est obligatoire";
      }

      if (_.isEmpty(attributes.country)) {
        errors["country"] = "Le country est obligatoire";
      }

      if (_.isEmpty(attributes.city)) {
        errors["city"] = "Le city est obligatoire";
      }

      if (_.isEmpty(attributes.school)) {
        errors["school"] = "Le champ ecole est obligatoire";
      }

      if (!attributes.start_year) {
        errors["start_year"] = "Le champ start_year est obligatoire";
      }

      if (
        attributes.end_year &&
        attributes.end_year < attributes.start_year &&
        attributes.in_progress === false
      ) {
        errors["date"] =
          "L'année de fin ne doit pas être inférieur à l'année du début";
      }

      return errors;
    },
  });

  const [current, setCurrent] = useState(
    attributes.in_progress ? "in_progress" : "end"
  );

  const handleChangeDateYear = (date: Date, name: string) => {
    const value = dateFormat(date, "yyyy");
    handleInputChange(_.toNumber(value), name);
  };

  const handleConfirm = () => {
    if (token) {
      (async () => {
        const newAttrs = [
          {
            ...attributes,
            id: generateInt8Id(),
            created_at: new Date(Date.now()),
            edited_at: new Date(Date.now()),
          },
        ];
        const { data, error } = await supabase
          .from("Formations")
          .insert(newAttrs)
          .select();

        console.log("DATA: ", data, "\nERROR: ", error, "Attrs: ", newAttrs);
        handleClose();
      })();
    } else {
      setOpenErrorModal(true);
    }
  };

  const handleClose = () => {
    dispatch(
      setNewPage({
        itemKey: "cv",
        itemLabel: "CV",
      })
    );
    navigate(-1);
  };

  const getErrorBoolean = (tag: string): boolean => {
    return _.isEmpty(errors?.[tag]);
  };

  return (
    <Box className="p-5">
      <div
        className="py-8 px-5 my-2"
        style={{
          background: OffWhiteLight,
          fontSize: "25px",
          fontWeight: 200,
          borderRadius: "10px",
        }}
      >
        Créer une nouvelle formation
      </div>

      {errors?.["date"] && (
        <div style={{ color: "red", textAlign: "center" }} className="p-3">
          {errors?.["date"]}
        </div>
      )}

      <CustomTextfield
        placeholder="Title"
        label="Title"
        id="title"
        name="title"
        value={attributes.title}
        onChange={handleInputChange}
        error={getErrorBoolean("title")}
        required
      />

      <CustomTextfield
        placeholder="Ecole"
        label="Ecole"
        id="school"
        name="school"
        error={getErrorBoolean("school")}
        onChange={handleInputChange}
        value={attributes.school}
        required
      />

      <CustomTextfield
        placeholder="Pays"
        label="Pays"
        id="country"
        name="country"
        error={getErrorBoolean("country")}
        onChange={handleInputChange}
        value={attributes.country}
        required
      />

      <CustomTextfield
        placeholder="Ville"
        label="Ville"
        id="city"
        name="city"
        error={getErrorBoolean("city")}
        onChange={handleInputChange}
        value={attributes.city}
        required
      />

      <div className="mb-5">
        <CustomButtonGroup
          currentButton={current}
          onClickButton={(key: string) => {
            setCurrent(key);
            handleInputChange(
              key === "in_progress" ? true : false,
              "in_progress"
            );

            if (key === "in_progress") {
              handleInputChange(undefined, "end_year");
            } else {
              handleInputChange(new Date(Date.now()).getFullYear(), "end_year");
            }
          }}
          actions={[
            {
              key: "end",
              label: "Avec une date de départ",
            },
            {
              key: "in_progress",
              label: "En cours",
            },
          ]}
        />
      </div>

      <CustomDate
        name="start_year"
        views={["year"]}
        value={`${attributes.start_year}-01-01`}
        onChangeDate={handleChangeDateYear}
        label="Date de début"
      />

      <div className="mb-5" />
      {current !== "in_progress" && (
        <CustomDate
          name="end_year"
          value={`${attributes.end_year}-01-01`}
          views={["year"]}
          onChangeDate={handleChangeDateYear}
          label="Date de fin"
        />
      )}

      <CustomTextfield
        placeholder="Description"
        id="description"
        name="description"
        label="Description"
        onChange={handleInputChange}
        multiline
        rows={10}
      />

      {openErrorModal && (
        <ErrorModal
          description="Vous n'êtes pas autorisé à effectuer cette action"
          onClose={() => {
            setOpenErrorModal(false);
            handleClose();
          }}
        />
      )}

      {/* Actions */}
      <Box className="mt-3 flex flex-col gap-3">
        <Button
          fullWidth
          disabled={!_.isEmpty(errors)}
          onClick={handleConfirm}
          style={{
            background: sidebarItemClicked,
            color: White,
            padding: "10px",
          }}
        >
          Ajouter
        </Button>
        <Button
          fullWidth
          onClick={handleClose}
          style={{
            background: White,
            color: sidebarItemClicked,
            padding: "10px",
            border: `1px solid ${sidebarItemClicked}`,
          }}
        >
          Retour
        </Button>
      </Box>
    </Box>
  );
};

export default CreateForm;
