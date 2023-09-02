import { MyPicture } from "../../assets/images/images";

interface IPersonalImage {
  style?: object;
  className?: string;
}
const PersonalImage = ({ style, className }: IPersonalImage) => {
  return (
    <img
      alt="Personnal Image"
      src={MyPicture}
      className={className}
      style={style}
    />
  );
};

export default PersonalImage;
