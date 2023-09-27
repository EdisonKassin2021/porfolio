import { Box, Button } from "@mui/material";
import { White, darkteal, secondSidebarBackground } from "../../assets/colors";
import CustomTextfield from "../../components/CustomTextfield/CustomTextfield";
import useLoginState from "../../hooks/useLoginState";
import { INPUT_TYPE } from "../../utils/constants/actions";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { useScreenSize } from "../../hooks/useScreenSize";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import LoginGIF from "../../assets/images/pngwing.png";
import { motion } from "framer-motion";

const useStyle = makeStyles({
  pwdLost: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const LoginScreen = () => {
  const size = useScreenSize();
  const navigate = useNavigate();
  const { attributes, handleInputChange, disabled } = useLoginState({
    email: "",
    pwd: "",
  });

  return (
    <Box className={"p-10 h-full flex items-center justify-around"}>
      <Box
        className="p-3 shadow-md overflow-auto"
        style={{
          background: White,
          height: "100%",
          borderRadius: "10px",
          ...(_.includes(["lg", "xl", "md"], size) && {
            width: "40%",
          }),
          ...(!_.includes(["lg", "xl", "md"], size) && {
            width: "100%",
          }),
        }}
      >
        {/* LOGIN HEADER */}
        <LoginHeader title="Login" />

        {/* LOGIN CONTENT */}
        <div className="p-3">
          <CustomTextfield
            id={"email"}
            name="email"
            label="Email"
            onChange={handleInputChange}
            value={attributes.email}
            required
          />
        </div>
        <div className="p-3">
          <CustomTextfield
            id={"pwd"}
            name="pwd"
            label="Password"
            type={INPUT_TYPE.PASSWORD}
            onChange={handleInputChange}
            value={attributes.pwd}
            required
          />
        </div>

        <LoginPasswordLost />

        {/* LOGIN ACTION */}
        <div className="p-3">
          <Button
            className="p-3"
            fullWidth
            disabled={disabled}
            style={{
              background: "#092347",
              color: White,
            }}
          >
            Login
          </Button>
        </div>
        <div className="p-3">
          <Button
            className="p-3"
            fullWidth
            onClick={() => navigate(-1)}
            style={{
              border: "1px solid #092347",
              color: secondSidebarBackground,
            }}
          >
            Retour à l'acceuil
          </Button>
        </div>
      </Box>

      <Box>
        <motion.div
          whileHover={{ scale: 0.5, rotate: [0, 0, 150, 160, 0] }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
        >
          <img alt="GIF" src={LoginGIF} />
        </motion.div>
      </Box>
    </Box>
  );
};

export default LoginScreen;

const LoginHeader = ({ title }: { title: string }) => {
  return (
    <Box
      className="p-8 text-center text-3xl font-semibold"
      style={{ color: darkteal }}
    >
      <div>{title}</div>
    </Box>
  );
};

const LoginPasswordLost = () => {
  const classe = useStyle();
  return (
    <div
      className={classNames(
        "p-3 flex justify-end items-center text-md text-cyan-800 cursor-pointer",
        classe.pwdLost
      )}
    >
      <span>Mot de passe oublié ?</span>
    </div>
  );
};
