import { Box } from "@mui/material";
import { ChildrenLayout } from "./CV";
import CVIdentity from "./CVIdentity";
import _ from "lodash";
import CVProfile from "./CVProfile";
import CVExperience from "./CVExperience";
import CVFormation from "./CVFormation";
import CVSkills from "./CVSkills";
import CVAccomplishment from "./CVAccomplishment";
import CVLanguage from "./CVLanguage";
import CVHobbies from "./CVHobbies";

const CVBody = () => {
  return (
    <Box id="content-cv">
      <ChildrenLayout>
        <CVIdentity />
        <CVProfile />
        <CVExperience />
        <CVSkills />
        <CVFormation />
        <CVAccomplishment />
        <CVLanguage />
        <CVHobbies />
      </ChildrenLayout>
    </Box>
  );
};

export default CVBody;
