import { Box, Button, Grid, InputLabel } from "@mui/material";
import { MyPicture } from "../../assets/images/images";
import { sidebarItemClicked } from "../../assets/colors";
import { ReactNode, useState } from "react";
import { FlagIcon } from "react-flag-kit";
import { GENDER } from "../../utils/constants/SidebarItem";
import DefaultModal from "../../components/Modal/DefaultModal";
import ImagePreview from "../../components/ImagePreview/ImagePreview";

const Profils = () => {
  const [preview, setPreview] = useState(false);
  return (
    <Box
      className="p-8 pr-10 h-full overflow-y-auto"
      style={{
        color: "#333c4d",
      }}
    >
      <Grid
        container
        direction={["column", "row"]}
        spacing={2}
        className="w-full"
      >
        <Grid item xs={12} md={2} className="w-full">
          <Grid item container justifyContent={"center"}>
            <img
              alt="Photo de profil"
              src={MyPicture}
              style={{
                borderRadius: "20px",
                width: 150,
                height: 200,
              }}
            />
          </Grid>

          <Grid item container justifyContent={"center"} className="p-3">
            <Button
              className="shadow-md"
              style={{
                borderRadius: "5px",
                background: sidebarItemClicked,
                color: "#fff",
              }}
              onClick={() => setPreview(true)}
            >
              Preview
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12} md={10}>
          <Box>
            <ShowInput label="Patronyme" value={<span>{"KASSIN"}</span>} />
            <ShowInput
              label="Prénoms"
              value={<span>{"Saturnin Edison Tchola"}</span>}
            />
            <ShowInput label="Sexe" value={<span>{GENDER.HOMME}</span>} />
            <ShowInput
              label="Pays d'origine"
              value={
                <div className="flex items-center gap-5">
                  <span>Bénin</span>
                  <span>
                    <FlagIcon code="BJ" />
                  </span>
                </div>
              }
            />
            <ShowInput
              label="Pays de résidence"
              value={
                <div className="flex items-center gap-5">
                  <span>Sénégal</span>
                  <span>
                    <FlagIcon code="SN" />
                  </span>
                </div>
              }
            />
            <ShowInput
              label="Date de naissance"
              value={<span>{"29/11/1997"}</span>}
            />

            <ShowInput
              label="Lieu de naissance"
              value={<span>{"Gouka"}</span>}
            />

            <ShowInput
              label="Adresse"
              value={<span>{"Médina rue 37 angle 20"}</span>}
            />
          </Box>
        </Grid>
      </Grid>

      {preview && (
        <DefaultModal
          open={preview}
          title={"Previsualisation"}
          onClose={() => setPreview(false)}
        >
          <ImagePreview imageAlt="Photo de profil" imageUrl={MyPicture} />
        </DefaultModal>
      )}
    </Box>
  );
};

export default Profils;

const ShowInput = ({ label, value }: { label: string; value: ReactNode }) => {
  return (
    <Box className="flex items-center justify-between py-3">
      <InputLabel
        style={{
          fontWeight: 700,
        }}
      >
        {label}:
      </InputLabel>
      <Box>{value}</Box>
    </Box>
  );
};
