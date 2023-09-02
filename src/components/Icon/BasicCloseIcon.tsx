import { JSX } from "react/jsx-runtime";
import SmallIconButton from "../SmallIconButton";
import { ISmallIconButton } from "../SmallIconButton/SmallIconButton";

const BasicCloseIcon = (props: JSX.IntrinsicAttributes & ISmallIconButton) => {
  return (
    <SmallIconButton {...props}>
      <span className="material-icons-outlined">close</span>
    </SmallIconButton>
  );
};

export default BasicCloseIcon;
