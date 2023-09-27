import { Box, InputLabel, Divider } from "@mui/material";
import { MyPicture } from "../../assets/images/images";
import { GreyLight } from "../../assets/colors";
import { ReactNode } from "react";
import { FlagIcon } from "react-flag-kit";
import { GENDER } from "../../utils/constants/SidebarItem";
import { motion } from "framer-motion";

const Profils = () => {
  return (
    <Box
      className="p-20 h-full overflow-y-auto"
      style={{
        background: GreyLight, //"#333c4d",
      }}
    >
      <Box className="shadow-sm rounded-xl bg-white p-3 w-full">
        <Box className="p-3 flex items-center gap-3">
          <span
            className="text-xl font-bold uppercase"
            style={{
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, green, blue, red)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            Carte d'identité
          </span>
          <span>
            <FlagIcon code="BJ" />
          </span>
          <span>
            <FlagIcon code="SN" />
          </span>
        </Box>
        <Divider />
        <Box className="flex">
          <Box style={{ width: "30%" }} className="flex justify-center mt-5">
            <motion.div whileTap={{ scale: 1.2 }}>
              <img
                alt="Photo de profil"
                src={MyPicture}
                style={{
                  borderRadius: "20px",
                  width: 200,
                  height: 250,
                }}
              />
            </motion.div>
          </Box>

          <Box className="w-full grow p-3 px-10  overflow-y-auto">
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
              value={<span>{"+221 78 119 23 94 / +221 76 122 48 84"}</span>}
            />
          </Box>
        </Box>
      </Box>

      {/* Refléchir s'il faut le garder */}
      {/* {preview && (
        <DefaultModal
          open={preview}
          title={"Previsualisation"}
          onClose={() => setPreview(false)}
        >
          <ImagePreview imageAlt="Photo de profil" imageUrl={MyPicture} />
        </DefaultModal>
      )} */}
    </Box>
  );
};

export default Profils;

const ShowInput = ({ label, value }: { label: string; value: ReactNode }) => {
  return (
    <Box className="flex items-center justify-between py-1">
      <InputLabel
        style={{
          fontWeight: 700,
          fontSize: "20px",
          fontStyle: "italic",
        }}
      >
        {label}:
      </InputLabel>
      <span
        style={{
          fontSize: "20px",
        }}
      >
        {value}
      </span>
    </Box>
  );
};
