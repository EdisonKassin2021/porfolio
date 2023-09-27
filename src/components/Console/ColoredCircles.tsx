import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  circle: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    margin: "0 5px",
  },
  green: {
    backgroundColor: "#4CAF50",
  },
  orange: {
    backgroundColor: "#FFA500",
  },
  red: {
    backgroundColor: "#FF0000",
  },
});

function ColoredCircles() {
  const classes = useStyles();

  return (
    <Box className="w-full flex items-center gap-2 p-3">
      <div className={`${classes.circle} ${classes.green}`}></div>
      <div className={`${classes.circle} ${classes.orange}`}></div>
      <div className={`${classes.circle} ${classes.red}`}></div>
    </Box>
  );
}

export default ColoredCircles;
