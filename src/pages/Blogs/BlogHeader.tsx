import { Box, Button } from "@mui/material";
import {
  White,
  secondSidebarBackground,
  sidebarItemHover,
} from "../../assets/colors";
import { useNavigate } from "react-router-dom";

const BlogHeader = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="p-10 font-bold text-3xl uppercase flex items-center justify-between px-12"
      style={{ background: sidebarItemHover, color: secondSidebarBackground }}
    >
      <div>Blog</div>
      <Button
        style={{
          background: secondSidebarBackground,
          color: White,
        }}
        onClick={() => navigate(`create`)}
      >
        Créer un nouveau blog
      </Button>
    </Box>
  );
};

export default BlogHeader;
