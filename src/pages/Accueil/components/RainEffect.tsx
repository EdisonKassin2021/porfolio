import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  rainContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#000", // Fond noir pour simuler la nuit
  },
  raindrop: {
    position: "absolute",
    width: "2px",
    height: "10px",
    backgroundColor: "#00f", // Couleur de la goutte de pluie
    opacity: 0.7, // Opacité de la goutte de pluie
    animation: "$fall 1s linear infinite", // Animation de chute
  },
  "@keyframes fall": {
    to: {
      transform: "translateY(100vh)", // Chute jusqu'au bas de l'écran
    },
  },
});

function RainEffect() {
  const classes = useStyles();

  return (
    <div className={classes.rainContainer}>
      {/* Ajoutez ici les gouttes de pluie */}
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      <div className={classes.raindrop}></div>
      {/* ... ajoutez plus de gouttes de pluie */}
    </div>
  );
}

export default RainEffect;
