import FileUploadIcon from "@mui/icons-material/FileUpload";
import SmallIconButton from "../SmallIconButton";
import { JSX } from "react/jsx-runtime";
import { ISmallIconButton } from "../SmallIconButton/SmallIconButton";
const BasicUploadIcon = (props: JSX.IntrinsicAttributes & ISmallIconButton) => {
  return (
    <SmallIconButton {...props}>
      <FileUploadIcon />
    </SmallIconButton>
  );
};

export default BasicUploadIcon;
