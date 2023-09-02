import FileDownloadIcon from "@mui/icons-material/FileDownload";

import SmallIconButton from "../SmallIconButton";
import { JSX } from "react/jsx-runtime";
import { ISmallIconButton } from "../SmallIconButton/SmallIconButton";
const BasicDownloadIcon = (
  props: JSX.IntrinsicAttributes & ISmallIconButton
) => {
  return (
    <SmallIconButton {...props}>
      <FileDownloadIcon />
    </SmallIconButton>
  );
};

export default BasicDownloadIcon;
