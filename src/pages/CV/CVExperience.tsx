import CVLayout from "./CVLayout";
import CVTimeline from "../../components/CustomTimeline/CustomTimeline";

const CVExperience = () => {
  return (
    <CVLayout title="Expériences" subElement="experience">
      <CVTimeline
        timelines={[
          {
            subTitle: "2018 - 2021",
            title: "Job Title at Project or Company Name",
          },
          {
            subTitle: "2017 - 2018",
            title: "Job Title at Project or Company Name",
          },
        ]}
      />
    </CVLayout>
  );
};

export default CVExperience;
