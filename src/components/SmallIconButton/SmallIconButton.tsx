import { IconButton, IconButtonProps, makeStyles } from "@material-ui/core";
import { GreyLight, GreyMedium } from "../../assets/colors";

export interface ISmallIconButton extends IconButtonProps {
  filled?: boolean;
}

const useStyles = makeStyles({
  SmallIconButton: (props: ISmallIconButton) => ({
    padding: "8px",
    color: "inherit",
    "&:hover": {
      backgroundColor: GreyLight,
    },
    ...(props.filled && {
      "&.Mui-disabled": {
        backgroundColor: GreyLight,
      },
    }),
    ...(props.filled && {
      backgroundColor: GreyLight,
      "&:hover": {
        backgroundColor: GreyMedium,
      },
    }),
  }),
});

export const SmallIconButton = (props: ISmallIconButton) => {
  const classes = useStyles(props);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, filled: _filled, ...otherProps } = props;
  return (
    <IconButton className={classes.SmallIconButton} {...otherProps}>
      {children}
    </IconButton>
  );
};

export default SmallIconButton;
