import { CV } from "../../Mock/CV";
import CVLayout from "./CVLayout";
import { Grid, Box, List, ListItem, ListItemText } from "@mui/material";
import { splitStringArrayIntoColumns } from "./utils";
// import _ from "lodash";

const CVSkills = () => {
  const [leftColumn, rightColumn] = splitStringArrayIntoColumns(CV.skills);
  return (
    <CVLayout title="Compétences" noEditButton={false}>
      <Grid container spacing={2} className="px-3" columnSpacing={2}>
        <Grid item xs={6}>
          <Box>
            <List>
              {leftColumn.map((competence, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`• ${competence}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <List>
              {rightColumn.map((competence, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`• ${competence}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </CVLayout>
  );
};

export default CVSkills;
