import { useCallback, useEffect, useState } from "react";

import { Badge, Box, makeStyles } from "@material-ui/core";
import classNames from "classnames";
import _ from "lodash";
import { Green, GreyDark, Teal } from "../../assets/colors";

interface ITabs {
  dataTestId?: string;
  className?: string;
  onChangeSelectedTab?: (tabId: string) => void;
  shiftScrollbar?: number; // shifts the scrollbar Npx to the right, using -Npx margin and Npx padding to compensate
  children: (JSX.Element | null) | (JSX.Element | null)[];
}

const useStyles = makeStyles((theme: any) => ({
  Tabs: {
    marginBottom: 16,
    minHeight: 40,
    display: "flex",
    overflow: "auto",
    flexShrink: 0,
  },
  Tab: {
    "& > *": {
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: GreyDark,
    // minWidth: 48,
    minHeight: 40,
    fontSize: 16,
    fontWeight: theme.typography.fontWeightBold,
    marginRight: 24,
    padding: 0,
    borderBottom: `2px solid transparent`, // avoid hick-up when toggling active
    "&.active": {
      color: Green,
      borderBottom: `2px solid ${Green}`,
    },
    // shift badge to the right a bit more (otherwise overlapping label)
    "& .MuiBadge-anchorOriginTopRightRectangular": {
      backgroundColor: Teal,
      color: Green,
      top: "4px",
      right: "-12px",
      fontSize: "12px",
      // For an alternate, small badge
      // height: "16px",
      // minWidth: "16px",
      // padding: "0 4px",
    },
  },
}));

const Tabs = ({
  className,
  shiftScrollbar,
  children,
  dataTestId,
  onChangeSelectedTab,
}: ITabs) => {
  const classes = useStyles();
  const childrenAsArray = _.isArray(children)
    ? _.compact(children)
    : _.compact([children]);

  const url = new URL(window.location.href);
  const search_params = new URLSearchParams(url.search);

  let tabId: string = "";
  if (search_params.has("tabId")) {
    tabId = search_params.get("tabId") || "";
  }

  const initialTabId = childrenAsArray[0].props.id;
  const [activeTabId, setActiveTabId] = useState(tabId || initialTabId);

  useEffect(() => {
    if (tabId) {
      setActiveTabId(tabId);
    }
  }, [tabId]);

  const handleActiveTab = useCallback(
    (id: string) => {
      setActiveTabId(id);
      if (onChangeSelectedTab) onChangeSelectedTab(id);
    },
    [onChangeSelectedTab]
  );

  const onClickBadge = (tabId: string) => {
    if (search_params.has("tabId")) {
      search_params.set("tabId", tabId);

      const fullPath = `${location.pathname}?${search_params}`;
      window.history.replaceState({}, "", fullPath);
    }
  };

  if (childrenAsArray.length === 0) {
    return null;
  }

  const activeTab = _.find(
    childrenAsArray,
    (child: { props: { id: string } }) => child.props.id === activeTabId
  );

  return (
    <>
      <Box
        className={classNames(className, classes.Tabs)}
        data-testid={dataTestId}
      >
        {_.map(childrenAsArray, (tab: any) => {
          if (tab?.props?.hidden) {
            return null;
          }
          return (
            <Box
              key={tab.props.id}
              className={classNames(
                classes.Tab,
                activeTabId === tab.props.id && "active"
              )}
              onClick={() => handleActiveTab(tab.props.id)}
              role="button"
              data-testid={`tab-${tab.props.id}`}
            >
              <Badge
                overlap="rectangular"
                badgeContent={tab.props.badgeContent || null}
                onClick={() => onClickBadge(tab.props.id)}
                invisible={tab.props.badgeContent ? false : true}
              >
                {tab.props.label}
              </Badge>
            </Box>
          );
        })}
      </Box>

      {!activeTab?.props?.hidden && (
        <Box
          // NOTE: re-mount tab on tab switch (in case multiple tabs share some components)
          // Usually it is not intended to optimise renders by keeping mounted component between 2 tabs,
          // and the problem is stateful components will not re-initialise.
          key={activeTab?.props?.id}
          className={activeTab?.props?.className}
          // height="100%" // breaks Map tabs
          overflow={activeTab?.props?.noOverflow ? "hidden" : "auto"}
          style={{
            ...(shiftScrollbar && {
              marginRight: `-${shiftScrollbar}px`,
              paddingRight: `${shiftScrollbar}px`,
            }),
            ...(activeTab?.props?.boxShadow && {
              boxShadow: "0px 4px 12px rgb(0 0 0 / 10%)",
            }),
          }}
        >
          {activeTab?.props?.children}
        </Box>
      )}
    </>
  );
};

export default Tabs;
