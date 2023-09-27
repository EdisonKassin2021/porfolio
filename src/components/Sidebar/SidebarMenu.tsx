import { Box } from "@mui/material";
import _ from "lodash";
import { ISidebarItem, SidebarItems } from "../../utils/constants/SidebarItem";
import { makeStyles, ListItem, List } from "@material-ui/core";
import classNames from "classnames";
import {
  White,
  secondSidebarBackground,
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
import { useScreenSize } from "../../hooks/useScreenSize";

const useStyle = makeStyles({
  ListItem: ({ size }: any) => ({
    padding: _.includes(["lg", "md", "sm", "xs"], size) ? "10px" : "10px 30px",
    display: "flex",
    justifyContent: "start",
    fontSize: _.includes(["lg", "xl"], size) ? "18px" : "16px",
    borderRadius: "5px",

    "&:hover": {
      margin: "0 8px",
      background: sidebarItemHover,
      color: secondSidebarBackground,
      width: "100%",
    },
  }),
});

interface ISidebarMenu {
  onClose?: () => void;
}
const SidebarMenu = ({ onClose }: ISidebarMenu) => {
  const size = useScreenSize();
  const classes = useStyle({ size });
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
            className={classNames(
              classes.ListItem,
              "cursor-pointer flex items-center gap-5"
            )}
            style={
              currentPageId === item.key
                ? {
                    background: sidebarItemClicked,
                    color: whiteColor,
                    fontWeight: 700,
                    border: `1px solid ${White}`,
                  }
                : undefined
            }
          >
            {item.Icon && (
              <span>
                <item.Icon />
              </span>
            )}
            <span>{item.label}</span>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SidebarMenu;
