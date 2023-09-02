import { JSX } from "react/jsx-runtime";
import SmallIconButton from "../SmallIconButton";
import { ISmallIconButton } from "../SmallIconButton/SmallIconButton";
const BasicScannerIcon = (
  props: JSX.IntrinsicAttributes & ISmallIconButton
) => {
  return (
    <SmallIconButton {...props}>
      <span className="material-icons-outlined">qr_code_scanner</span>
    </SmallIconButton>
  );
};

export default BasicScannerIcon;
