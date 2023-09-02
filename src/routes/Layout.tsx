import React from "react";
import { Grid, Box, Hidden } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { sidebarBackground } from "../assets/colors";
import classNames from "classnames";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Helmet } from "react-helmet";
import { myName } from "../assets/constants";
import { useAppSelector } from "../redux/app/hooks";
import { getCurrentPageLabel } from "../redux/features/category/CategorySlice";

const useStyle = makeStyles({
  sidebar: {
    background: sidebarBackground,
  },
});
interface ILayout {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayout) => {
  const classes = useStyle();
  const label = useAppSelector(getCurrentPageLabel);
  return (
    <Box className="w-full h-full">
      <Helmet>
        <title>
          {myName} - {label}
        </title>
        <meta
          name="description"
          content="Ingenieur de conception des Télécommunications, Développeur Fullstack, Architecte réseaux informatiques et télécoms"
        />
      </Helmet>

      <Hidden only={["xs", "sm"]}>
        <Grid container alignItems={"center"} className="h-full">
          <Grid
            item
            xs={2}
            className={classNames(classes.sidebar, "h-full shadow-sm relative")}
          >
            <Sidebar />
          </Grid>

          <Grid xs={10} item className="h-full p-2">
            <Header />
            {children}
          </Grid>
        </Grid>
      </Hidden>

      <Hidden only={["lg", "md", "xl"]}>
        <Grid className="h-full">
          <Grid xs={3} item className={classNames("shadow-sm")}>
            <Header />
          </Grid>

          <Grid xs={9} item className="p-2 h-full">
            {children}
          </Grid>
        </Grid>
      </Hidden>
    </Box>
  );
};

export default Layout;
