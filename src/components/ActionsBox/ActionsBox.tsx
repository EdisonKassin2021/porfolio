import { Box, Button, makeStyles } from "@material-ui/core";
import _ from "lodash";
import { OffWhite, secondaryColor } from "../../assets/colors";
import { ACTION_TYPE } from "../../utils/constants/SidebarItem";

const useStyle = makeStyles({
  Actions: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  Button: {
    background: secondaryColor,
    color: OffWhite,
  },
});

export interface IAction {
  id?: string;
  label: string;
  actionType: ACTION_TYPE;
  style?: object;
  Icon?: React.ReactNode;
  onClick: (id: string) => void;
}
interface IActionsBox {
  id: string;
  actions: IAction[];
}
const ActionsBox = ({ actions, id }: IActionsBox) => {
  const classes = useStyle();
  return (
    <Box className={classes.Actions}>
      {_.map(actions, (action: IAction, idx: number) => (
        <Button
          key={action.id ?? idx}
          // className={classes.Button}
          startIcon={action.Icon}
          style={{ ...action.style, fontFamily: "Inter, sans-serif" }}
          onClick={() => {
            action.onClick(id);
          }}
        >
          {action.label}
        </Button>
      ))}
    </Box>
  );
};

export default ActionsBox;
