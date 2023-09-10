import DefaultModal from "./DefaultModal";
import { Box } from "@mui/material";

interface IErrorModal {
  description: string;
  title?: string;
  onClose: () => void;
}
const ErrorModal = ({ description, title, onClose }: IErrorModal) => {
  return (
    <DefaultModal open title={title ?? "Erreur !!!"} onClose={onClose}>
      <Box className="p-5">{description}</Box>
    </DefaultModal>
  );
};

export default ErrorModal;
