import { Box, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SnackbarProps {
  open: boolean;
  onClose: () => void;
  message: React.ReactNode;
}

const CustomSnackbar = ({ open, onClose, message }: SnackbarProps) => {
  const handleClose = (e: any) => {
    e.stopPropagation();
    onClose();
  };

  const action = (
    <span onClick={handleClose} className="cursor-pointer">
      <CloseIcon fontSize="small" />
    </span>
  );
  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        className="w-full"
        open={open}
        onClose={handleClose}
        action={action}
        message={message}
      />
    </Box>
  );
};

export default CustomSnackbar;
