import { IconButtonProps } from "@material-ui/core";
import SmallIconButton from "../SmallIconButton";

interface IBasicArrowIcon extends IconButtonProps {
  direction: "up" | "down" | "left" | "right";
  filled?: boolean;
  shadow?: boolean;
}

const BasicArrowIcon = ({
  direction,
  filled,
  shadow,
  ...otherProps
}: IBasicArrowIcon) => {
  return (
    <SmallIconButton
      filled={filled}
      style={{
        ...(shadow && {
          boxShadow:
            "0 0 2px 0 rgba(1, 1, 1, 0.18), 0 2px 8px 0 rgba(1, 1, 1, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.2)",
        }),
      }}
      {...otherProps}
    >
      <span className="material-icons-outlined" style={{ fontWeight: 600 }}>
        {`keyboard_arrow_${direction}`}
      </span>
    </SmallIconButton>
  );
};

export default BasicArrowIcon;
