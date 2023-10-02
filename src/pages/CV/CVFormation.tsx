import CVTimeline from "../../components/CustomTimeline/CustomTimeline";
import CVLayout from "./CVLayout";
import _ from "lodash";
import { List, ListItem } from "@mui/material";
import { CV } from "../../Mock/CV";

interface IFormation {
  ecole: string;
  city: string;
  qualification: string;
  year: number;
  description?: string[];
}
const CVFormation = () => {
  const formatFormation = (formations: IFormation[]) => {
    return _.map(formations, (exp: IFormation) => {
      return {
        title: exp.qualification,
        subTitle: (
          <div className="flex items-center gap-2 italic">
            <span>{exp.ecole}</span> |<span>{exp.city}</span> |
            <span>{exp.year}</span>
          </div>
        ),
        description: (
          <List style={{ fontSize: "15px" }}>
            {_.map(exp.description, (desc: string, index: number) => (
              <ListItem
                className="flex items-center gap-5 text-justify"
                key={`${index}`}
              >
                <span>👉</span>
                <span>{desc}</span>
              </ListItem>
            ))}
          </List>
        ),
      };
    });
  };

  return (
    <CVLayout title="Formations" subElement="formation" noEditButton={false}>
      <CVTimeline timelines={formatFormation(CV.educations)} />
    </CVLayout>
  );
};

export default CVFormation;
