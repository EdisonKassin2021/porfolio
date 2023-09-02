import { Box, BoxProps, makeStyles } from "@material-ui/core";
import ErrorIcon from "@mui/icons-material/Error";

import styles from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyles = makeStyles(styles as any);

interface ITabPlaceHolderProps extends BoxProps {
  title: string;
  description: string;
  icon?: JSX.Element;
  iconSize?: string | number;
  iconColor?: string;
}
function TabPlaceHolder({
  description,
  title,
  icon,
  iconSize,
  iconColor,
  ...rest
}: ITabPlaceHolderProps) {
  const classes = useStyles({ iconSize, iconColor });

  return (
    <Box className={classes.Empty} {...rest}>
      {icon ? icon : <ErrorIcon />}
      <h2 className={classes.EmptyIconLabelTitle}>{title}</h2>
      <span className={classes.EmptyIconLabelDescription}>{description}</span>
    </Box>
  );
}

export default TabPlaceHolder;
