import { Box } from "@mui/material";
import CVLayout from "./CVLayout";
import _ from "lodash";
import { CV } from "../../Mock/CV";

interface IAccomplissement {
  intitule: string;
  description: string;
}
const CVAccomplishment = () => {
  return (
    <CVLayout title="Accomplissements" noEditButton={false}>
      <Box className="flex flex-col gap-3 px-8">
        {_.map(CV.accomplishments, (acc: IAccomplissement) => (
          <div className="flex items-start gap-3">
            <span>♥</span>
            <div className="flex flex-col items-start text-justify">
              <span className="font-bold">{acc.intitule}</span>
              <span>{acc.description}</span>
            </div>
          </div>
        ))}
      </Box>
    </CVLayout>
  );
};

export default CVAccomplishment;
