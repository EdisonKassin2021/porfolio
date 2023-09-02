import { JSX } from "react/jsx-runtime";
import SmallIconButton from "../SmallIconButton";
import { ISmallIconButton } from "../SmallIconButton/SmallIconButton";
const BasicShareIcon = (props: JSX.IntrinsicAttributes & ISmallIconButton) => {
  return (
    <SmallIconButton {...props}>
      <span
        className="material-icons-outlined"
        // style={{ fontSize: 22 }}
      >
        share
      </span>
    </SmallIconButton>
  );
};

export default BasicShareIcon;
