import { Box } from "@mui/material";
import SidebarMenu from "./SidebarMenu";
import SocialMedias from "./SocialMedias";

const Sidebar = () => {
  return (
    <Box className="p-2">
      <SidebarMenu />
      <SocialMedias classe="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-center gap-3" />
    </Box>
  );
};

export default Sidebar;
