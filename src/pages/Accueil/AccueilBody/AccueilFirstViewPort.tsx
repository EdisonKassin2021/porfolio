import { Avatar, Box, Hidden } from "@mui/material";
import AccueilBodyIdentity from "./AccueilBodyIdentity";
import Console from "../../../components/Console/Console";
import { MyPicture } from "../../../assets/images/images";

const AccueilFirstViewPort = () => {
  return (
    <Box
      style={{
        background: "linear-gradient(to bottom, #2271b1, #818a96, #2271b1)",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        className="w-full h-full p-5"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* MOBILE */}
        <Hidden only={["lg", "xl", "md"]}>
          <Box className="w-full ">
            <Box
              flexGrow={1}
              className="w-full p-3 flex flex-col items-center justify-center"
            >
              <Avatar
                src={MyPicture}
                alt="My picture"
                style={{ objectFit: "cover", width: 100, height: 100 }}
              />
              <AccueilBodyIdentity />
            </Box>

            <Console />
          </Box>
        </Hidden>

        {/* WEB */}
        <Hidden only={["xs", "sm"]}>
          <Box className="w-full flex p-5">
            <Box flexGrow={1} className="flex flex-col w-full items-center">
              <Avatar
                src={MyPicture}
                alt="My picture"
                style={{ objectFit: "cover", width: 200, height: 200 }}
              />
              <AccueilBodyIdentity />
            </Box>

            <Box flexGrow={1} className="w-full">
              <Console />
            </Box>
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

export default AccueilFirstViewPort;
