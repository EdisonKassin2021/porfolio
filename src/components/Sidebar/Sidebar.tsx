import { Box } from "@mui/material";
import SidebarMenu from "./SidebarMenu";
import SocialMedias from "./SocialMedias";
import { Teal, White } from "../../assets/colors";

const Sidebar = () => {
  return (
    <Box
      className="p-2 shadow-md relative"
      style={{ background: Teal, color: White }}
    >
      <SidebarMenu />
      <SocialMedias classe="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-center gap-8" />
    </Box>
  );
};

export default Sidebar;
