import CVLayout from "./CVLayout";
import CVTimeline from "../../components/CustomTimeline/CustomTimeline";
import _ from "lodash";
import { List, ListItem } from "@material-ui/core";
import { CV } from "../../Mock/CV";
import React from "react";
interface IExperience {
  title: string;
  subtitle?: string[];
  description?: string[];
}
const CVExperience = () => {
  const formatExperience = (experiences: IExperience[]) => {
    return _.map(experiences, (exp: IExperience) => {
      return {
        title: exp.title,
        subTitle: (
          <div className="flex items-center gap-2 italic">
            {_.map(exp.subtitle, (sub: string, index: number) => {
              return (
                <React.Fragment key={`${sub}-${index}`}>
                  <span>{sub}</span>
                  {index !== _.size(exp.subtitle) - 1 && "|"}
                </React.Fragment>
              );
            })}
          </div>
        ),
        description: (
          <List style={{ fontSize: "15px" }}>
            {_.map(exp.description, (desc: string, index: number) => (
              <ListItem
                className="flex items-center gap-5 text-justify"
                key={index}
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
    <CVLayout title="Expériences" subElement="experience" noEditButton={false}>
      <CVTimeline timelines={formatExperience(CV.experiences)} />
    </CVLayout>
  );
};

export default CVExperience;
