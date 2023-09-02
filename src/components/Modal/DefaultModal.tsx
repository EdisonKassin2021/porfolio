import { ReactNode } from "react";
import ModalHeader from "./ModalHeader";
import Modal from "./Modal";
import { Button, Box } from "@material-ui/core";
import ModalContent from "./ModalContent";
import ModalActions from "./ModalActions";
import { Divider } from "@mui/material";
import BasicCloseIcon from "../Icon/BasicCloseIcon";

interface IDefaultModal {
  open: boolean;
  title?: ReactNode;
  onClose?: () => void;
  alignTop?: boolean;
  children: ReactNode;
  onAction?: () => void;
  hideTitleBox?: boolean;
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  fullWidth?: boolean;
  fullScreen?: boolean;
}
const DefaultModal = ({
  open,
  title,
  alignTop = true,
  onClose,
  onAction,
  children,
  hideTitleBox = false,
  maxHeight = "860px",
  minWidth = 810,
  maxWidth = 1200,
  minHeight = "90vh",
  fullWidth = true,
  fullScreen = false,
}: IDefaultModal) => {
  return (
    <Modal
      open={open}
      alignTop={alignTop}
      maxWidth={maxWidth}
      minWidth={minWidth}
      minHeight={minHeight}
      maxHeight={maxHeight}
      fullWidth={fullWidth}
      fullScreen={fullScreen}
    >
      {!hideTitleBox && (
        <>
          <ModalHeader>
            <Box className="w-full flex items-center justify-between">
              <span>{title ?? null}</span>
              <BasicCloseIcon onClick={onClose} />
            </Box>
          </ModalHeader>
          <Divider />
        </>
      )}

      <ModalContent>{children}</ModalContent>

      {(onAction || onClose) && (
        <ModalActions>
          {onClose && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              Annuler
            </Button>
          )}
          {onAction && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onAction();
              }}
            >
              Confirmer
            </Button>
          )}
        </ModalActions>
      )}
    </Modal>
  );
};

export default DefaultModal;
