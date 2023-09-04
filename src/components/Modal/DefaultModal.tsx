/* eslint-disable @typescript-eslint/no-explicit-any */
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
  onClose?: (e?: any) => void;
  alignTop?: boolean;
  children: ReactNode;
  onAction?: (event?: any) => void;
  hideTitleBox?: boolean;
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  fullWidth?: boolean;
  fullScreen?: boolean;
  actionButtonTxt?: string;

  actionButtonStyle?: object;
  cancelButtonStyle?: object;

  actionButtonClassName?: string;
  cancelButtonClassName?: string;

  disabled?: boolean;
}
const DefaultModal = ({
  open,
  title,
  alignTop = true,
  onClose,
  onAction,
  children,
  hideTitleBox = false,
  // maxHeight = "860px",
  // minHeight = "90vh",
  minHeight,
  maxHeight,
  // minWidth = 810,
  // maxWidth = 1200,
  minWidth,
  maxWidth,
  fullWidth = true,
  fullScreen = false,
  actionButtonTxt,

  actionButtonStyle,
  cancelButtonStyle,

  actionButtonClassName,
  cancelButtonClassName,

  disabled,
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
              onClick={onClose}
              style={cancelButtonStyle}
              className={cancelButtonClassName}
            >
              Annuler
            </Button>
          )}
          {onAction && (
            <Button
              style={actionButtonStyle}
              className={actionButtonClassName}
              disabled={disabled}
              onClick={(e) => {
                e.stopPropagation();
                onAction();
              }}
            >
              {actionButtonTxt ?? "Confirmer"}
            </Button>
          )}
        </ModalActions>
      )}
    </Modal>
  );
};

export default DefaultModal;
