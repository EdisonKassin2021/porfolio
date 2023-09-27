import { Box, Button } from "@mui/material";
import _ from "lodash";
import { useScreenSize } from "../../../hooks/useScreenSize";
import classNames from "classnames";
import { motion } from "framer-motion";
import { White, secondSidebarBackground } from "../../../assets/colors";
import { takeNFirstElements } from "../../../utils/utils";
import { useState } from "react";

const AcceuilSkillSet = () => {
  const screen = useScreenSize();
  const [more, setMore] = useState(false);
  const imgs = [
    {
      key: "react",
      url: "https://quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/a9bf22bd-373a-4fae-a900-c22fd12c87c7.png",
    },
    {
      key: "reactnative",
      url: "https://cdn.buttercms.com/S6sfpy7OT3yBokvhGo09",
    },
    {
      key: "tailwindcss",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png",
    },
    {
      key: "bootstrap",
      url: "https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png",
    },
    {
      key: "html",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_Qh6FMf5F4r_iEADY7iint4X1P-X8LLKfeZIgmQ&s",
    },
    {
      key: "css",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      key: "scss",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
    },
    {
      key: "less",
      url: "https://seeklogo.com/images/L/less-logo-AAE582C286-seeklogo.com.png",
    },
    {
      key: "nodejs",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
    },
    {
      key: "php",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
    },
    {
      key: "typescript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    },
    {
      key: "firebase",
      url: "https://firebase.google.com/static/images/brand-guidelines/logo-standard.png",
    },
    {
      key: "supabase",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ixw00J0WI6Ulh5kLntpH77T3sklGqXZY2r4ppH6zt5p_rSjdg7bKiyzDTMdtEyEX5FQ&usqp=CAU",
    },
    {
      key: "postgresql",
      url: "https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.png",
    },
    {
      key: "mongodb",
      url: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png",
    },
    {
      key: "jest",
      url: "https://assets.stickpng.com/images/62a765c8bd73a4af5c5d4fbc.png",
    },
    {
      key: "reacttestinglibrairy",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54vj1VgjX_RKsm3A813c8sir-AaaS_-WkDD3Z0fMHmQ&s",
    },
  ];

  const nbresPicked = _.size(imgs) / 2;

  const getImagesPicked = () => {
    if (!_.includes(["sm", "xs"], screen)) return imgs;
    return more ? imgs : takeNFirstElements(imgs, nbresPicked);
  };

  return (
    <Box className="w-full flex flex-col items-center gap-3">
      <Box
        className="w-full text-center font-bold underline"
        style={{ fontSize: "20px", color: secondSidebarBackground }}
      >
        <h2>Technologies utilisées</h2>
      </Box>

      <Box>
        <p style={{ fontWeight: 300 }}>
          Ici sont présentés quelques languages/technologies que nous utilisons
          régulièrements!
        </p>
      </Box>

      <Box
        className={classNames(
          "grid gap-6 justify-center p-3",
          _.includes(["sm", "xs"], screen) ? "grid-cols-3" : "grid-cols-4"
        )}
      >
        {_.map(getImagesPicked(), (im: any) => (
          <motion.div whileHover={{ scale: 0.8 }} viewport={{ once: true }}>
            <div className="shadow-md rounded-md p-3">
              <img
                src={im.url}
                alt={im.key}
                key={im.key}
                style={{
                  width: "150px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            </div>
          </motion.div>
        ))}
      </Box>
      {_.includes(["sm", "xs"], screen) && (
        <Box className="flex w-full justify-center">
          <Button
            onClick={() =>
              setMore((prev) => {
                return !prev;
              })
            }
            style={{
              background:
                "linear-gradient(to bottom, #2271b1, #818a96, #2271b1)",
              color: White,
              borderRadius: "30px",
              padding: "10px",
            }}
          >
            Voir {more ? "moins" : "plus"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AcceuilSkillSet;
