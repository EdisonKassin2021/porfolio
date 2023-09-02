import { JSX } from "react/jsx-runtime";
import SmallIconButton from "../SmallIconButton";
import { ISmallIconButton } from "../SmallIconButton/SmallIconButton";

const BasicDeleteIcon = (props: JSX.IntrinsicAttributes & ISmallIconButton) => {
  return (
    <SmallIconButton {...props}>
      <span className="material-icons-outlined">delete</span>
    </SmallIconButton>
  );
};

export default BasicDeleteIcon;
