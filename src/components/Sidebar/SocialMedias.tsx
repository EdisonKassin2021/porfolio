import { Box, Link } from "@mui/material";
import { Github, Gmail, LinkedIn } from "../../utils/constants/socialMedia";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import { sidebarItemClicked } from "../../assets/colors";
import classNames from "classnames";

interface ISocialMedias {
  classe?: string;
}
const SocialMedias = ({ classe }: ISocialMedias) => {
  return (
    <Box className={classNames(classe)}>
      <Link href={LinkedIn} target="_blank">
        <LinkedInIcon style={{ color: sidebarItemClicked }} />
      </Link>

      <Link href={Github} target="_blank">
        <GitHubIcon style={{ color: sidebarItemClicked }} />
      </Link>

      <Link href={Gmail} target="_blank">
        <MailOutlineIcon style={{ color: sidebarItemClicked }} />
      </Link>
    </Box>
  );
};

export default SocialMedias;
