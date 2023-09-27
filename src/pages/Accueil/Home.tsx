import { Box, Divider, ListItem, Link as MuiLink } from "@mui/material";

import { White, WhiteSmoke } from "../../assets/colors";

import _ from "lodash";
import AccueilHeader from "./Header/AccueilHeader";
import AccueilFirstViewPort from "./AccueilBody/AccueilFirstViewPort";
import AccueilBodyLastPosts from "./AccueilBody/AccueilBodyLastPosts";
import { useScreenSize } from "../../hooks/useScreenSize";
import AcceuilSkillSet from "./AccueilBody/AcceuilSkillSet";

const Home = () => {
  const screen = useScreenSize();
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

      {/* ajouter le contact ici <Box className="p-5 grid shadow-md w-full">
        <AccueilBodyFooter />
      </Box> */}
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
          <span>Edison KASSIN</span>
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
}: any) => {
  return (
    <ListItem>
      <MuiLink
        href={link}
        style={{
          textDecoration: "none",
          ...style,
        }}
        className="flex gap-3 items-center cursor-pointer"
        target={withTarget ? "_blank" : undefined}
      >
        {Icon && <span>{Icon}</span>} {label && <span>{label}</span>}
      </MuiLink>
    </ListItem>
  );
};

export default Home;
