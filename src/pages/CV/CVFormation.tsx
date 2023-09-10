import CVTimeline from "../../components/CustomTimeline/CustomTimeline";
import CVLayout from "./CVLayout";

const CVFormation = () => {
  return (
    <CVLayout title="Formations" subElement="formation">
      <CVTimeline
        timelines={[
          {
            subTitle: "2018 - 2021",
            title: "Title Name",
          },
          {
            subTitle: "2017 - 2018",
            title: "Title Name",
          },
        ]}
      />
    </CVLayout>
  );
};

export default CVFormation;
