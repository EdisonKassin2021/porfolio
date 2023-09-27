import { Box, Hidden } from "@mui/material";
import Contacts from "../../Contacts";

const AccueilBodyFooter = () => {
  return (
    <Box className="w-full flex">
      <Hidden only={["sm", "xs"]}>
        <Box flexGrow={1} className="h-full w-full p-3">
          cool1
        </Box>
      </Hidden>

      <Box flexGrow={1} className="w-full">
        <Contacts />
      </Box>
    </Box>
  );
};

export default AccueilBodyFooter;
