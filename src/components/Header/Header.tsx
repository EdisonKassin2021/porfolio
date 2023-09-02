import { Box, Hidden } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import classNames from "classnames";
import SmallIconButton from "../SmallIconButton";
import { useScreenSize } from "../../hooks/useScreenSize";
import _ from "lodash";
import SocialMedias from "../Sidebar/SocialMedias";
import { useState } from "react";
import DrawerComponent from "../Drawer/Drawer";

const Header = () => {
  const screen = useScreenSize();
  const [open, setOpen] = useState(false);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setOpen((el) => !el);
  };
  return (
    <Box
      className={classNames(
        "flex items-center justify-between",
        _.includes(["xs", "sm"], screen) && "p-5"
      )}
    >
      <Hidden only={["lg", "md", "xl"]}>
        <SmallIconButton onClick={(e) => handleClick(e)}>
          <MenuIcon />
        </SmallIconButton>
      </Hidden>

      <Hidden only={["lg", "md", "xl"]}>
        <SocialMedias classe="flex items-center gap-5" />
      </Hidden>

      {open && <DrawerComponent onClose={() => setOpen(false)} />}
    </Box>
  );
};

export default Header;
