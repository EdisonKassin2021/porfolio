import { Box, Hidden } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import classNames from "classnames";
import SmallIconButton from "../SmallIconButton";
import { useScreenSize } from "../../hooks/useScreenSize";
import _ from "lodash";
import SocialMedias from "../Sidebar/SocialMedias";
import { useState } from "react";
import DrawerComponent from "../Drawer/Drawer";
import LogoutIcon from "@mui/icons-material/Logout";
import supabase from "../../configs/supabase";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { getSessionToken, logout } from "../../redux/features/login/LoginSlice";

const Header = () => {
  const screen = useScreenSize();
  const [open, setOpen] = useState(false);
  const token = useAppSelector(getSessionToken);
  const dispatch = useAppDispatch();

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

      {token && (
        <div
          className="flex items-center cursor-pointer"
          style={{
            fontSize: "10px",
          }}
          onClick={async () => {
            if (!token) return;
            //https://supabase.com/dashboard/project/hmexluljreaekzdfulwg/api?page=users
            const { error } = await supabase.auth.signOut();
            if (error) {
              dispatch(
                logout({
                  success: false,
                  error,
                })
              );
            } else {
              dispatch(
                logout({
                  success: true,
                })
              );
            }
          }}
        >
          <LogoutIcon />
          <span>Se déconnecter</span>
        </div>
      )}

      {open && <DrawerComponent onClose={() => setOpen(false)} />}
    </Box>
  );
};

export default Header;
