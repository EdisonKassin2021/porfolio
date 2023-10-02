import { Box, Divider, InputLabel } from "@mui/material";
import { MyPicture } from "../../assets/images/images";
import { ReactNode } from "react";
import { FlagIcon } from "react-flag-kit";
import { GENDER } from "../../utils/constants/SidebarItem";
import { motion } from "framer-motion";
import { Teal } from "../../assets/colors";
import { useScreenSize } from "../../hooks/useScreenSize";
import classNames from "classnames";
import _ from "lodash";

const Profils = () => {
  const screen = useScreenSize();

  return (
    <Box className="h-full overflow-y-auto bg-white">
      <div
        className={classNames(
          "flex-col my-5 p-8",
          _.includes(["md", "lg", "xl"], screen) && "mx-32 shadow-md"
        )}
        style={{
          border: _.includes(["md", "lg", "xl"], screen)
            ? `2px solid ${Teal}`
            : undefined,
        }}
      >
        <div>
          <motion.div whileTap={{ scale: 1.2 }}>
            <img
              alt="Photo de profil"
              src={MyPicture}
              className="rounded-lg shadow-2xl"
              style={{
                width: 200,
                height: 200,
                objectFit: "contain",
              }}
            />
          </motion.div>
        </div>

        <Divider style={{ marginTop: "10px" }} />

        <div className={classNames("py-6")}>
          <Box className="w-full grow overflow-y-auto">
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
            <ShowInput
              label="Adresse email"
              value={<span>{"kassinsaturninedison@gmail.com"}</span>}
            />
            <ShowInput
              label="Numéro de téléphone"
              value={<span>{"+221781192394/ +221761224884"}</span>}
            />
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default Profils;

const ShowInput = ({ label, value }: { label: string; value: ReactNode }) => {
  const screen = useScreenSize();

  return (
    <Box
      className={classNames(
        "flex py-1 w-full",
        _.includes(["sm", "xs"], screen) && "flex-col",
        _.includes(["lg", "xl", "md"], screen) && "justify-start items-center"
      )}
    >
      <InputLabel
        style={{
          fontWeight: 700,
          fontSize: "20px",
          width: "300px",
        }}
        className="uppercase"
      >
        {label}:
      </InputLabel>
      <span
        style={{
          fontSize: "20px",
          marginLeft: _.includes(["sm", "xs"], screen) ? "15px" : undefined,
        }}
        className="break-words"
      >
        {value}
      </span>
    </Box>
  );
};
