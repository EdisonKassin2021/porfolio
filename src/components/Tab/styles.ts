import { GreyDark } from "../../assets/colors";

export default () => ({
  TabContainer: {
    background: "#3333",
  },
  Empty: ({
    iconSize = "30px",
    iconColor = GreyDark,
  }: {
    iconSize: string | number;
    iconColor: string;
  }) => ({
    color: "#6c6c6c",
    margin: "20px",
    "& > svg": {
      fontSize: iconSize,
      color: iconColor,
    },
  }),
  ChipTitleRequired: {
    fontWeight: "bold",
  },
  EmptyIconLabelTitle: {
    fontSize: "24px",
    fontWeight: "bold",
  },

  EmptyIconLabelDescription: {
    width: "467px",
    height: "42px",
    margin: "8px 0 0",
  },
  InfoIcon: {
    margin: "0 2px",
    fontSize: "16px",
    color: "#C6C6C6",
  },
});
