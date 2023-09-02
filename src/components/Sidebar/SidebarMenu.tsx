import { Box } from "@mui/material";
import _ from "lodash";
import { ISidebarItem, SidebarItems } from "../../utils/constants/SidebarItem";
import { makeStyles, ListItem, List } from "@material-ui/core";
import classNames from "classnames";
import {
  sidebarItemClicked,
  sidebarItemHover,
  whiteColor,
} from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import { BASE_ROUTE } from "../../routes/constants";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
  getCurrentPageId,
  setNewPage,
} from "../../redux/features/category/CategorySlice";

const useStyle = makeStyles({
  ListItem: {
    padding: "8px",
    display: "flex",
    justifyContent: "center",
    fontWeight: 200,
    fontSize: "16px",
    borderRadius: "5px",

    "&:hover": {
      margin: "0 8px",
      background: sidebarItemHover,
      width: "100%",
    },
  },
});

interface ISidebarMenu {
  onClose?: () => void;
}
const SidebarMenu = ({ onClose }: ISidebarMenu) => {
  const classes = useStyle();
  const currentPageId = useAppSelector(getCurrentPageId);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    item: {
      key: string;
      label: string;
    }
  ) => {
    e.stopPropagation();
    dispatch(
      setNewPage({
        itemKey: item.key,
        itemLabel: item.label,
      })
    );
    if (onClose) onClose();
    navigate(`${BASE_ROUTE}/${item.key}`);
  };
  return (
    <Box className=" flex items-center justify-center">
      <List className="w-full flex flex-col items-center justify-center">
        {_.map(SidebarItems, (item: ISidebarItem) => (
          <ListItem
            key={item.key}
            onClick={(e) =>
              handleClick(e, { key: item.key, label: item.label })
            }
            className={classNames(classes.ListItem, "cursor-pointer")}
            style={
              currentPageId === item.key
                ? {
                    background: sidebarItemClicked,
                    color: whiteColor,
                    fontWeight: 700,
                  }
                : undefined
            }
          >
            {item.label}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SidebarMenu;
