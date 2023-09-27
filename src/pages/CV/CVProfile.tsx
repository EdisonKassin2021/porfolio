import { CV } from "../../Mock/CV";
import CVLayout from "./CVLayout";
const CVProfile = () => {
  return (
    <CVLayout title="A propos de moi" noEditButton={false}>
      <div className="text-justify">{CV.profile}</div>
    </CVLayout>
  );
};

export default CVProfile;
