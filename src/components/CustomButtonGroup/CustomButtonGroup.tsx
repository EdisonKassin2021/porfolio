import { Box, Button, ButtonGroup, ButtonGroupProps } from "@mui/material";
import _ from "lodash";
import { ReactNode } from "react";
import { White, sidebarItemClicked } from "../../assets/colors";

interface ISingleAction {
  key: string;
  label: string;
  startIcon?: ReactNode;
}
interface ICustomButtonGroup extends ButtonGroupProps {
  actions: ISingleAction[];
  currentButton?: string;
  onClickButton?: (key: string) => void;
}
const CustomButtonGroup = ({
  actions,
  currentButton,
  onClickButton,
  ...rest
}: ICustomButtonGroup) => {
  return (
    <Box className="mb-3">
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        fullWidth
        {...rest}
      >
        {_.map(actions, ({ key, label, startIcon }: ISingleAction) => (
          <Button
            startIcon={startIcon}
            key={key}
            onClick={() => onClickButton?.(key)}
            style={{
              padding: "10px",
              background:
                key === currentButton ? sidebarItemClicked : undefined,
              color: key === currentButton ? White : undefined,
            }}
          >
            {label}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default CustomButtonGroup;
