import { Box, Button } from "@mui/material";
import {
  White,
  secondSidebarBackground,
  secondaryColor,
} from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../../hooks/useScreenSize";
import _ from "lodash";

const BlogHeader = () => {
  const navigate = useNavigate();
  const screen = useScreenSize();
  return (
    <Box
      className="p-5 font-bold text-xl uppercase flex items-center justify-between px-12"
      style={{
        color: secondSidebarBackground,
      }}
    >
      <div>Liste des posts écrits</div>
      {_.includes(["xl", "lg"], screen) && (
        <Button
          style={{
            background: secondaryColor,
            color: White,
          }}
          onClick={() => navigate(`create`)}
        >
          Nouveau
        </Button>
      )}
    </Box>
  );
};

export default BlogHeader;
