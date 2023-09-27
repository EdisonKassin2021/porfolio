import { Box } from "@mui/material";
import SidebarMenu from "./SidebarMenu";
import SocialMedias from "./SocialMedias";
import { White } from "../../assets/colors";
import { Button } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { getSessionToken, logout } from "../../redux/features/login/LoginSlice";
import { BASE_ROUTE } from "../../routes/constants";
import { useNavigate } from "react-router-dom";
import supabase from "../../configs/supabase";

const Sidebar = () => {
  const token = useAppSelector(getSessionToken);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Box className="p-2">
      <div
        className="p-3 text-center mb-3"
        style={{
          fontSize: "14px",
          textDecoration: "underline",
        }}
      >
        {token ? (
          <Button
            style={{
              fontSize: "14px",
              color: "whitesmoke",
              textDecoration: "underline",
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
            Se deconnecter
          </Button>
        ) : (
          <Button
            onClick={() => {
              navigate(`${BASE_ROUTE}/login`);
            }}
            style={{
              fontSize: "14px",
              color: "whitesmoke",
              textDecoration: "underline",
            }}
          >
            Se connecter
          </Button>
        )}
      </div>
      <SidebarMenu />
      <SocialMedias
        classe="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-center gap-8"
        style={{
          color: White,
        }}
      />
    </Box>
  );
};

export default Sidebar;
