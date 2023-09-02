import { Grid, InputLabel, Hidden, Box } from "@mui/material";
import { useState } from "react";
import classNames from "classnames";
import { Textfit } from "react-textfit";
import ActionsBox, { IAction } from "../../../components/ActionsBox/ActionsBox";
import { sidebarBackground } from "../../../assets/colors";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useScreenSize } from "../../../hooks/useScreenSize";
import _ from "lodash";

interface IBasicCard {
  Icon?: JSX.Element;
  title: React.ReactNode;
  description?: string;
  id: string;
  path: string;
  actions?: IAction[];
}
const BasicCard = ({ Icon, title, description, actions, id }: IBasicCard) => {
  const [isHovered, setIsHovered] = useState(false);
  const screen = useScreenSize();

  // Gérez l'événement lorsque le curseur de la souris entre dans le Box
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Gérez l'événement lorsque le curseur de la souris quitte le Box
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Box>
      <Grid
        onMouseEnter={
          _.includes(["lg", "md", "xl"], screen) ? handleMouseEnter : undefined
        }
        onMouseLeave={
          _.includes(["lg", "md", "xl"], screen) ? handleMouseLeave : undefined
        }
        className={classNames(
          !isHovered ? "shadow-sm" : "shadow-md",
          "p-5 my-3"
        )}
        style={{
          background: !isHovered ? sidebarBackground : undefined,
        }}
        container
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid
          item
          xs={"auto"}
          container
          alignItems={"center"}
          columnSpacing={{
            xs: "auto",
            md: "20px",
            lg: "20px",
          }}
        >
          <Hidden only={["xs", "sm"]}>
            <Grid item>
              <Box
                style={{
                  background: sidebarBackground,
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                {Icon}
              </Box>
            </Grid>
          </Hidden>

          <Grid item>
            <Grid xs item>
              <Textfit mode="single">
                <InputLabel
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {title}
                </InputLabel>
              </Textfit>
            </Grid>

            <Grid xs item>
              <Textfit mode="single">
                <InputLabel className="p-3">{description}</InputLabel>
              </Textfit>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Hidden only={["sm", "xs"]}>
            {actions && isHovered && <ActionsBox actions={actions} id={id} />}
          </Hidden>

          <Hidden only={["lg", "md", "xl"]}>
            <span>
              <DoubleArrowIcon />
            </span>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicCard;
