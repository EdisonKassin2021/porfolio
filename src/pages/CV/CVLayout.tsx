import { Box } from "@mui/material";
import { sidebarItemClicked } from "../../assets/colors";
import { ReactNode } from "react";

interface ICVPartHeader {
  title: string;
  children: ReactNode;
}
const CVLayout = ({ title, children }: ICVPartHeader) => {
  return (
    <Box
      className="mb-5"
      style={{
        color: sidebarItemClicked,
      }}
    >
      <div className="mb-5">
        <div className="text-3xl w-full font-bold mb-5">{title}</div>
      </div>

      <Box>{children}</Box>
    </Box>
  );
};

export default CVLayout;
