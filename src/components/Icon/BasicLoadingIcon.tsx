import { CircularProgress } from "@material-ui/core";

import SmallIconButton from "../SmallIconButton";
import { JSX } from "react/jsx-runtime";
import { ISmallIconButton } from "../SmallIconButton/SmallIconButton";
const BasicLoadingIcon = (
  props: JSX.IntrinsicAttributes & ISmallIconButton
) => {
  return (
    <SmallIconButton {...props}>
      <CircularProgress style={{ width: "24px", height: "24px" }} />
    </SmallIconButton>
  );
};

export default BasicLoadingIcon;
