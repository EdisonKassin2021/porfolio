import { Box, Chip, Link } from "@mui/material";
import classNames from "classnames";
import anime from "animejs";
import { useEffect } from "react";
import { useScreenSize } from "../../../hooks/useScreenSize";
import _ from "lodash";
import { White } from "../../../assets/colors";

const AccueilBodyIdentity = () => {
  const screen = useScreenSize();
  useEffect(() => {
    anime({
      targets: ".hand",
      rotate: ["0deg", "20deg"], // Faites pivoter la main de 0 degré à 20 degrés (et inversement)
      duration: 1000, // Durée de l'animation en millisecondes
      direction: "alternate", // Faites l'animation en alternance (aller-retour)
      loop: true, // Répétez l'animation en continu
      easing: "easeInOutQuad", // Courbe d'animation
    });
    anime({
      targets: ".my-element",
      easing: "easeInOutQuad",
      loop: false,
      color: "#FFF",
      duration: 3000,
    });
  }, []);

  const screenTextStyle = {
    phone: {
      firstMessage: {
        fontSize: "25px",
      },
      secondMessage: {
        fontSize: "30px",
      },
      thirdMessage: {
        fontSize: "25px",
      },
      hand: {
        fontSize: "25px",
      },
    },
    web: {
      firstMessage: {
        fontSize: "40px",
      },
      secondMessage: {
        fontSize: "55px",
      },
      thirdMessage: {
        fontSize: "40px",
      },
      hand: {
        fontSize: "40px",
      },
    },
  };

  return (
    <Box
      className="flex justify-center items-center p-3 w-full"
      style={{ lineHeight: 1.1 }}
    >
      <Box className="w-full flex flex-col gap-2">
        <h2
          style={
            _.includes(["xs", "sm"], screen)
              ? { ...screenTextStyle.phone.firstMessage }
              : { ...screenTextStyle.web.firstMessage }
          }
          className="w-full flex items-center justify-center gap-3"
        >
          <span>Hey</span>
          <span
            className="hand"
            style={
              _.includes(["xs", "sm"], screen)
                ? {
                    ...screenTextStyle.phone.firstMessage,
                    display: "inline-block",
                  }
                : {
                    ...screenTextStyle.web.firstMessage,
                    display: "inline-block",
                  }
            }
          >
            👋
          </span>
          <span>I'm</span>
        </h2>
        <h1
          style={
            _.includes(["xs", "sm"], screen)
              ? { ...screenTextStyle.phone.secondMessage }
              : { ...screenTextStyle.web.secondMessage }
          }
          className="w-full flex items-center justify-center gap-3"
        >
          <span className={classNames("font-bold", "my-element")}>
            Edison KASSIN
          </span>
        </h1>
        <h2
          style={
            _.includes(["xs", "sm"], screen)
              ? { ...screenTextStyle.phone.thirdMessage }
              : { ...screenTextStyle.web.thirdMessage }
          }
          className="font-semibold w-full flex items-center justify-center gap-3"
        >
          Full Stack Developer
        </h2>

        <p className="text-justify">
          Basé à Dakar, je suis actuellement Fullstack Developer chez{" "}
          <Chip
            label={
              <Link
                href="https://fr.fieldproapp.com/"
                target="_blank"
                style={{
                  color: White,
                  textDecoration: "underline",
                  textUnderlineOffset: 1.5,
                }}
              >
                Optimetriks
              </Link>
            }
          />{" "}
          depuis {new Date(Date.now()).getFullYear() - 2021} ans. Mes tech stack
          sont principalement React JS en front end et Node JS en backend.
          Passionné, motivé et très dynamique, je suis doté de forte capacité
          d'adaptation.
        </p>
      </Box>
    </Box>
  );
};

export default AccueilBodyIdentity;
