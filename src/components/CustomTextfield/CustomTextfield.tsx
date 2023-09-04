/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseTextFieldProps,
  Box,
  InputAdornment,
  TextField,
} from "@mui/material";
import { INPUT_TYPE } from "../../utils/constants/actions";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import SmallIconButton from "../SmallIconButton";
import { Red } from "../../assets/colors";

interface ICustomTextfield extends BaseTextFieldProps {
  name: string;
  id: string;
  label?: string;
  type?: INPUT_TYPE;
  onChange?: (value: any, name: string) => void;
  fullWidth?: boolean;
}
const CustomTextfield = ({
  name,
  id,
  label,
  onChange,
  type: initialtype = INPUT_TYPE.TEXT,
  fullWidth = true,
  ...rest
}: ICustomTextfield) => {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState(getType(initialtype));
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.stopPropagation();
    if (onChange) {
      onChange(e.target.value, name);
    }
  };

  return (
    <>
      <TextField
        name={name}
        id={id}
        onChange={handleChange}
        label={label}
        type={type}
        fullWidth={fullWidth}
        InputProps={{
          ...(initialtype === INPUT_TYPE.PASSWORD && {
            endAdornment: (
              <InputAdornment position="end">
                <SmallIconButton
                  onClick={() => {
                    const value = !showPassword;
                    setShowPassword(value);
                    if (value) {
                      setType("text");
                    } else {
                      setType("password");
                    }
                  }}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </SmallIconButton>
              </InputAdornment>
            ),
          }),
        }}
        {...rest}
      />
      <Box style={{ color: Red }}>{rest.error ? rest.error : null}</Box>
    </>
  );
};

export default CustomTextfield;

const getType = (type: INPUT_TYPE) => {
  switch (type) {
    case INPUT_TYPE.TEXT:
      return "text";

    case INPUT_TYPE.PASSWORD:
      return "password";

    case INPUT_TYPE.EMAIL:
      return "email";

    default:
      return "text";
  }
};
