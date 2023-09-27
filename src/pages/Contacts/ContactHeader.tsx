import { Box, Divider } from "@mui/material";
import { secondSidebarBackground } from "../../assets/colors";

const ContactHeader = () => {
  return (
    <Box className="text-4xl flex flex-col gap-3 p-5">
      <div
        className="text-center uppercase font-bold"
        style={{ color: secondSidebarBackground }}
      >
        Laissez nos un message
      </div>
      <Divider style={{ height: "3px", background: secondSidebarBackground }} />
    </Box>
  );
};

export default ContactHeader;
