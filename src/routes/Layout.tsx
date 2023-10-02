import React from "react";
import { Grid, Box, Hidden } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { GreyBorder, White } from "../assets/colors";
import classNames from "classnames";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Helmet } from "react-helmet";
import { myName } from "../assets/constants";
import { useAppSelector } from "../redux/app/hooks";
import { getCurrentPageLabel } from "../redux/features/category/CategorySlice";

const useStyle = makeStyles({
  sidebar: {
    background: GreyBorder,
    color: White,
    fontWeight: 400,
    width: "50px",
  },

  body: {
    background: White, //"#181b1f",
    flexGrow: 1,
  },
});
interface ILayout {
  children: React.ReactNode;
  hidden: boolean;
}
const Layout = ({ children, hidden }: ILayout) => {
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

      {!hidden ? (
        <>
          <Hidden only={["xs", "sm"]}>
            <Box className="flex h-full w-full overflow-hidden">
              <Sidebar />
              <Box className={classNames(classes.body, "p-2 overflow-y-auto")}>
                {children}
              </Box>
            </Box>
          </Hidden>

          <Hidden only={["lg", "md", "xl"]}>
            <Grid>
              <Grid
                xs={3}
                item
                className={classNames(
                  "shadow-sm fixed w-full z-20 bg-slate-400"
                )}
              >
                <Header />
              </Grid>

              <Grid xs={9} item className="p-2 pt-20">
                {children}
              </Grid>
            </Grid>
          </Hidden>
        </>
      ) : (
        <Box
          className="w-full h-full"
          style={{ background: "#092347" /*"#f6f6f6"*/ }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default Layout;
