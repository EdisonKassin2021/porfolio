import { Box } from "@mui/material";
import CVProfile from "./CVProfile";
import CVFormation from "./CVFormation";
import CVExperience from "./CVExperience";
const CustomCV = () => {
  return (
    <Box
      className="p-8 pr-10 h-full overflow-y-auto"
      style={{
        color: "#333c4d",
      }}
    >
      <CVProfile />
      <CVFormation />
      <CVExperience />
    </Box>
  );
};

export default CustomCV;
