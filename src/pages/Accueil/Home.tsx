import {
  Box,
  Button,
  Divider,
  Link,
  ListItem,
  Link as MuiLink,
} from "@mui/material";

import { White, WhiteSmoke } from "../../assets/colors";

import _ from "lodash";
import AccueilHeader from "./Header/AccueilHeader";
import AccueilFirstViewPort from "./AccueilBody/AccueilFirstViewPort";
import AccueilBodyLastPosts from "./AccueilBody/AccueilBodyLastPosts";
import { useScreenSize } from "../../hooks/useScreenSize";
import AcceuilSkillSet from "./AccueilBody/AcceuilSkillSet";

import { EnglishCV, FrenchCV } from "../../assets/pdf/pdf";

// Create styles

const Home = () => {
  const screen = useScreenSize();

  const handleDownload = (filename: string, pdfUrl: string) => {
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Créez un objet URL pour le blob
        const url = window.URL.createObjectURL(blob);

        // Créez un élément <a> pour le téléchargement
        const a = document.createElement("a");
        a.href = url;
        a.download = `${filename}.pdf`; // Spécifiez le nom du fichier à télécharger
        document.body.appendChild(a);

        // Déclenchez le téléchargement
        a.click();

        // Libérez l'URL de l'objet blob
        window.URL.revokeObjectURL(url);

        // Supprimez l'élément <a> créé
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error("Erreur lors du téléchargement du PDF : ", error);
      });
  };

  return (
    <Box style={{ background: White }} className="h-full">
      <AccueilHeader />
      <Divider />

      <Box
        style={
          _.includes(["xl", "lg", "md"], screen)
            ? { background: White, margin: "0 100px", padding: "10px" }
            : undefined
        }
      >
        <AccueilFirstViewPort />
      </Box>

      <Box className="p-5 flex justify-center w-full mt-3">
        <AcceuilSkillSet />
      </Box>

      <Box className="flex w-full justify-center p-5 mt-3">
        <AccueilBodyLastPosts />
      </Box>

      <Box className="flex w-full justify-center items-center p-5 mt-3 gap-5 ">
        <Button
          style={{
            background: "linear-gradient(to bottom, #2271b1, #818a96, red)",
            color: White,
          }}
          onClick={() =>
            handleDownload("Edison KASSIN - CV Francais", FrenchCV)
          }
        >
          Télécharger mon CV en FRANCAIS
        </Button>
        <Button
          style={{
            background: "linear-gradient(to bottom, red, #818a96, #2271b1)",
            color: White,
          }}
          onClick={() =>
            handleDownload("Edison KASSIN - English CV", EnglishCV)
          }
        >
          Télécharger mon CV en ANGLAIS
        </Button>
      </Box>
      <Box
        className="shadow-md bg-white p-5 flex justify-center items-center"
        style={{ background: WhiteSmoke }}
      >
        <div className="flex gap-2">
          <span>Copyright</span>{" "}
          <span className="font-bold">
            {new Date(Date.now()).getFullYear()}
          </span>
          <span>&copy;</span>
          <span>
            Tous droits réservés. Réalisé par{" "}
            <Link
              href="https://github.com/EdisonKassin2021"
              target="_blank"
              className="text-red-400"
            >
              Edison KASSIN
            </Link>
          </span>
        </div>
      </Box>
    </Box>
  );
};

export const HeaderSocialMedia = ({
  Icon,
  label,
  link,
  style,
  withTarget = true,
  noApplyLink = false,
  onClick,
}: any) => {
  return (
    <ListItem onClick={onClick}>
      {!noApplyLink ? (
        <MuiLink
          href={link}
          style={{
            textDecoration: "none",
            color: "blue",
            ...style,
          }}
          className="flex gap-3 items-center cursor-pointer"
          target={withTarget ? "_blank" : undefined}
        >
          {Icon && <span>{Icon}</span>} {label && <span>{label}</span>}
        </MuiLink>
      ) : (
        <div
          style={{
            textDecoration: "none",
            color: "blue",
            ...style,
          }}
          className="flex gap-3 items-center cursor-pointer"
        >
          {Icon && <span>{Icon}</span>} {label && <span>{label}</span>}
        </div>
      )}
    </ListItem>
  );
};

export default Home;
