import { IconButton, IconButtonProps } from "@material-ui/core";
import React from "react";

export interface IIcon extends IconButtonProps {
  Icon: React.ReactNode;
  style?: object;
}
const Icon = ({ size, onClick, Icon }: IIcon) => {
  return (
    <IconButton aria-label="delete" size={size} onClick={onClick}>
      {Icon}
    </IconButton>
  );
};

export default Icon;
