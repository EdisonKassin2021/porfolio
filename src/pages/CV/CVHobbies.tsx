import { CV } from "../../Mock/CV";
import CVLayout from "./CVLayout";
import { Grid, Box, List, ListItem, ListItemText } from "@mui/material";
import { splitStringArrayIntoColumns } from "./utils";
// import _ from "lodash";

const CVHobbies = () => {
  const [leftColumn, rightColumn] = splitStringArrayIntoColumns(CV.hobbies);
  return (
    <CVLayout title="Hobbies" noEditButton={false}>
      <Grid container spacing={2} className="px-3" columnSpacing={2}>
        <Grid item xs={6}>
          <Box>
            <List>
              {leftColumn.map((hobbie, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`• ${hobbie}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <List>
              {rightColumn.map((hobbie, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`• ${hobbie}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </CVLayout>
  );
};

export default CVHobbies;
