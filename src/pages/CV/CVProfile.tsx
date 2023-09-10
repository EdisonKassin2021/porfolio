import { CV } from "../../Mock/CV";
import CVLayout from "./CVLayout";
const CVProfile = () => {
  return (
    <CVLayout title="Profile" noAddButton>
      <div className="mb-10 text-justify">{CV.profile}</div>
    </CVLayout>
  );
};

export default CVProfile;
