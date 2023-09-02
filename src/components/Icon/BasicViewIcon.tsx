import { JSX } from "react/jsx-runtime";
import SmallIconButton from "../SmallIconButton";
import { ISmallIconButton } from "../SmallIconButton/SmallIconButton";
const BasicViewIcon = (props: JSX.IntrinsicAttributes & ISmallIconButton) => {
  return (
    <SmallIconButton {...props}>
      <span className="material-icons-outlined">visibility</span>
    </SmallIconButton>
  );
};

export default BasicViewIcon;
