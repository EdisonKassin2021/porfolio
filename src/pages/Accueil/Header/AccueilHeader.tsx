import { Box, Divider, Hidden, List, Menu } from "@mui/material";
import { White } from "../../../assets/colors";
import { BASE_ROUTE } from "../../../routes/constants";
import { Link } from "react-router-dom";
import Logo from "./../../../assets/images/Logo.jpeg";
import { HeaderSocialMedia } from "../Home";
import LinkedIn from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SmallIconButton from "../../../components/SmallIconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const AccueilHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      className="w-full"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: White,
        padding: "0px 10px",
        columnGap: "10px",
      }}
    >
      <Hidden only={["xs", "sm"]}>
        <Box className="flex items-center w-full justify-between" flexGrow={1}>
          <Link to={`${BASE_ROUTE}/accueil`} className="w-full">
            <img
              alt="Logo"
              src={Logo}
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
          </Link>

          <Box>
            <List className="w-full flex  items-center">
              <HeaderSocialMedia
                label={"Accueil"}
                link={`${BASE_ROUTE}/accueil`}
                withTarget={false}
              />
              <HeaderSocialMedia
                label={"Application"}
                link={`${BASE_ROUTE}/home`}
                withTarget={false}
              />
            </List>
          </Box>

          <Box
            display={"flex"}
            flexGrow={1}
            alignItems={"center"}
            width={"100%"}
            justifyContent={"end"}
          >
            <List className="flex items-center">
              <HeaderSocialMedia
                Icon={<LinkedIn />}
                label={"LinkedIn"}
                link={"https://www.linkedin.com/in/edison-kassin"}
                style={{ color: "#0077B5" }}
              />
              <HeaderSocialMedia
                Icon={<WhatsAppIcon />}
                label={"WhatsApp"}
                link={
                  "https://api.whatsapp.com/send?phone=221781192394&text=Hello%20Mr%20Edison%20KASSIN"
                }
                style={{ color: "#25D366" }}
              />
              <HeaderSocialMedia
                Icon={<GitHubIcon />}
                label={"Github"}
                link={
                  "https://api.whatsapp.com/send?phone=221781192394&text=Hello%20Mr%20Edison%20KASSIN"
                }
                style={{ color: "#000000" }}
              />
            </List>
          </Box>
        </Box>
      </Hidden>

      <Hidden only={["lg", "md", "xl"]}>
        <SmallIconButton
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </SmallIconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <HeaderSocialMedia
            label={"Accueil"}
            link={`${BASE_ROUTE}/accueil`}
            withTarget={false}
          />
          <HeaderSocialMedia
            label={"Application"}
            link={`${BASE_ROUTE}/home`}
            withTarget={false}
          />
          <Divider />

          <HeaderSocialMedia
            Icon={<LinkedIn />}
            label={"LinkedIn"}
            link={"https://www.linkedin.com/in/edison-kassin"}
            style={{ color: "#0077B5" }}
          />
          <HeaderSocialMedia
            Icon={<WhatsAppIcon />}
            label={"WhatsApp"}
            link={
              "https://api.whatsapp.com/send?phone=221781192394&text=Hello%20Mr%20Edison%20KASSIN"
            }
            style={{ color: "#25D366" }}
          />
          <HeaderSocialMedia
            Icon={<GitHubIcon />}
            label={"Github"}
            link={
              "https://api.whatsapp.com/send?phone=221781192394&text=Hello%20Mr%20Edison%20KASSIN"
            }
            style={{ color: "#000000" }}
          />
        </Menu>
      </Hidden>
    </Box>
  );
};

export default AccueilHeader;
