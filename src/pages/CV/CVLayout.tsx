import { Box, Button } from "@mui/material";
import { White, darkSeaGreen, sidebarItemClicked } from "../../assets/colors";
import { ReactNode, useState } from "react";
import BasicAddIcon from "../../components/Icon/BasicAddIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/app/hooks";
import { getSessionToken } from "../../redux/features/login/LoginSlice";
import BasicEditIcon from "../../components/Icon/BasicEditIcon";

interface ICVPartHeader {
  title: string;
  children: ReactNode;
  noAddButton?: boolean;
  noEditButton?: boolean;
  subElement?: string;
}

const CVLayout = ({
  title,
  children,
  noAddButton = true,
  noEditButton = true,
  subElement,
}: ICVPartHeader) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = useAppSelector(getSessionToken);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        color: sidebarItemClicked,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="text-xl mb-2 w-full font-bold italic">{title}</div>
        <div className="flex items-center gap-3">
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
          {!noEditButton && isHovered && token /*&& subElement*/ && (
            <BasicEditIcon />
          )}
        </div>
      </div>

      <Box>{children}</Box>
    </Box>
  );
};

export default CVLayout;
