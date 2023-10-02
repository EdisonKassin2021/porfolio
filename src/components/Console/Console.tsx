import { Box, Divider } from "@mui/material";
import { Black, WhiteSmoke } from "../../assets/colors";
import ColoredCircles from "./ColoredCircles";
import MapConsoleOutput from "./MapConsoleOutput";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  Element: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

const Console = ({
  background = Black,
  dividerBackground = WhiteSmoke,
}: {
  background?: string;
  dividerBackground?: string;
}) => {
  const classe = useStyle();

  return (
    <Box className="w-full pb-10 rounded-md" style={{ background }}>
      <Box className="w-full  bg-transparent" style={{ height: 300 }}>
        <ColoredCircles />
        <Divider style={{ height: "3px", background: dividerBackground }} />
        <Box
          className={classNames(
            "bg-transparent text-white flex flex-col gap-5 w-full h-full p-3 pb-10",
            classe.Element
          )}
        >
          <MapConsoleOutput />
        </Box>
      </Box>
    </Box>
  );
};

export default Console;
