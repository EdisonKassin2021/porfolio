import { Box, Divider, List } from "@mui/material";
import { Gmail } from "../../utils/constants/socialMedia";

import LinkedIn from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import classNames from "classnames";
import SmallIconButton from "../SmallIconButton";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { HeaderSocialMedia } from "../../pages/Accueil/Home";
import { getSessionToken, logout } from "../../redux/features/login/LoginSlice";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { useNavigate } from "react-router-dom";
import { BASE_ROUTE } from "../../routes/constants";
import supabase from "../../configs/supabase";
import { secondSidebarBackground } from "../../assets/colors";

interface ISocialMedias {
  classe?: string;
  style?: object;
}
const SocialMedias = ({ classe }: ISocialMedias) => {
  const token = useAppSelector(getSessionToken);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Box className={classNames(classe)}>
      <Box className={"dropdown dropdown-top dropdown-hover"}>
        <SmallIconButton tabIndex={0} className="btn m-1">
          <ReadMoreIcon />
        </SmallIconButton>

        <List
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <HeaderSocialMedia
            Icon={<LinkedIn />}
            label={"LinkedIn"}
            link={"https://www.linkedin.com/in/edison-kassin"}
            style={{ color: "#0077B5" }}
          />

          <HeaderSocialMedia
            Icon={<GitHubIcon />}
            label={"Github"}
            link={"https://github.com/EdisonKassin2021"}
            style={{ color: "#000000" }}
          />

          <HeaderSocialMedia
            Icon={<MailOutlineIcon />}
            label={"Gmail"}
            link={`mailto:${Gmail}`}
            style={{ color: "#DB4437" }}
          />

          <Divider />

          {!token ? (
            <HeaderSocialMedia
              label={"Se connecter"}
              onClick={() => {
                navigate(`${BASE_ROUTE}/login`);
              }}
              style={{ color: secondSidebarBackground }}
            />
          ) : (
            <HeaderSocialMedia
              label={"Se déconnecter"}
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
              style={{ color: secondSidebarBackground }}
            />
          )}
        </List>
      </Box>
    </Box>
  );
};

export default SocialMedias;
