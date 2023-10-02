import { Box, Tooltip } from "@mui/material";
import _ from "lodash";
import { ISidebarItem, SidebarItems } from "../../utils/constants/SidebarItem";
import { makeStyles, ListItem, List } from "@material-ui/core";
import classNames from "classnames";
import {
  secondSidebarBackground,
  sidebarItemClicked,
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
    color: secondSidebarBackground,
    fontSize: _.includes(["lg", "xl"], size) ? "13px" : "16px",
  }),
});

interface ISidebarMenu {
  onClose?: () => void;
  showLabel?: boolean;
}
const SidebarMenu = ({ onClose, showLabel }: ISidebarMenu) => {
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
    <Box className="flex items-center justify-center">
      <List className="flex flex-col gap-3">
        {_.map(SidebarItems, (item: ISidebarItem) => (
          <ListItem
            key={item.key}
            onClick={(e) =>
              handleClick(e, { key: item.key, label: item.label })
            }
            className={classNames(
              classes.ListItem,
              "cursor-pointer flex items-center",
              showLabel && "gap-3"
            )}
            style={
              currentPageId === item.key
                ? {
                    background: sidebarItemClicked,
                    color: whiteColor,
                    borderRadius: "10px",
                  }
                : undefined
            }
          >
            <Tooltip title={item.label} arrow placement="right">
              {item.Icon && (
                <span>
                  <item.Icon style={{ fontWeight: 200 }} />
                </span>
              )}
            </Tooltip>
            {showLabel && <span>{item.label}</span>}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SidebarMenu;
