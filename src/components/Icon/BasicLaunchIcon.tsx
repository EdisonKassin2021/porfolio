import { JSX } from "react/jsx-runtime";
import SmallIconButton from "../SmallIconButton";
import { ISmallIconButton } from "../SmallIconButton/SmallIconButton";
const BasicLaunchIcon = (props: JSX.IntrinsicAttributes & ISmallIconButton) => {
  return (
    <SmallIconButton {...props}>
      <span className="material-icons-outlined">launch</span>
    </SmallIconButton>
  );
};

export default BasicLaunchIcon;
