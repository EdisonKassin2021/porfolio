import { Box } from "@mui/material";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import { useScreenSize } from "../../../hooks/useScreenSize";
import _ from "lodash";
const FormationForm = () => {
  const screen = useScreenSize();
  return (
    <Box
      className={classNames(_.includes(["lg", "xm", "md"], screen) && "px-28")}
    >
      <Outlet />
    </Box>
  );
};

export default FormationForm;
