import { Box } from "@material-ui/core";
import { Rating } from "@mui/material";
import _ from "lodash";
import { CV } from "../../Mock/CV";
import CVLayout from "./CVLayout";

interface ILanguage {
  intitule: string;
  niveau: number;
}
const CVLanguage = () => {
  return (
    <CVLayout title="Langages" noEditButton={false}>
      <Box className="flex flex-col gap-1">
        {_.map(CV.languages, (lang: ILanguage) => (
          <div className="flex items-center px-5 gap-5">
            <span style={{ width: "100px" }}>{lang.intitule}: </span>
            <span>
              <Rating name="read-only" value={lang.niveau} readOnly max={6} />
            </span>
          </div>
        ))}
      </Box>
    </CVLayout>
  );
};

export default CVLanguage;
