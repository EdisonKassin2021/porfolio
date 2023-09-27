import { Box, Link } from "@mui/material";
import { Github, Gmail, LinkedIn } from "../../utils/constants/socialMedia";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import classNames from "classnames";

interface ISocialMedias {
  classe?: string;
  style?: object;
}
const SocialMedias = ({ classe, style }: ISocialMedias) => {
  return (
    <Box className={classNames(classe)}>
      <Link href={LinkedIn} target="_blank">
        <LinkedInIcon style={style} />
      </Link>

      <Link href={Github} target="_blank">
        <GitHubIcon style={style} />
      </Link>

      <Link href={`mailto:${Gmail}`} target="_blank">
        <MailOutlineIcon style={style} />
      </Link>
    </Box>
  );
};

export default SocialMedias;
