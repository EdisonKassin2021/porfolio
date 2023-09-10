import { Box, Button } from "@mui/material";
import { White, darkSeaGreen, sidebarItemClicked } from "../../assets/colors";
import { ReactNode } from "react";
import BasicAddIcon from "../../components/Icon/BasicAddIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/app/hooks";
import { getSessionToken } from "../../redux/features/login/LoginSlice";

interface ICVPartHeader {
  title: string;
  children: ReactNode;
  noAddButton?: boolean;
  subElement?: string;
}
const CVLayout = ({
  title,
  children,
  noAddButton = false,
  subElement,
}: ICVPartHeader) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = useAppSelector(getSessionToken);
  return (
    <Box
      className="mb-5"
      style={{
        color: sidebarItemClicked,
      }}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="text-3xl w-full font-bold mb-5">{title}</div>
        {!noAddButton && token && subElement && (
          <div>
            <Button
              style={{
                background: darkSeaGreen,
                color: White,
              }}
              onClick={() => {
                if (subElement) navigate(`${pathname}/${subElement}/create`);
              }}
              className="flex items-center"
            >
              <BasicAddIcon />
              <span>Ajouter</span>
            </Button>
          </div>
        )}
      </div>

      <Box>{children}</Box>
    </Box>
  );
};

export default CVLayout;
