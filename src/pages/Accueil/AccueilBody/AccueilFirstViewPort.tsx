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
      <Box className="w-full p-2 flex items-center justify-center bg-red-300 shadow-md">
        <span className="text-center text-white">
          <span className="underline font-extrabold">Note:</span> Toutes les
          sections de ce site ne sont pas disponibles. Ce site est en cours de
          construction
        </span>
      </Box>
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

            <Box className="mb-8">
              <Console />
            </Box>
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
