import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const ScreenOutlet = () => {
  return (
    <Box className="p-3 w-full h-full">
      <Outlet />
    </Box>
  );
};

export default ScreenOutlet;
