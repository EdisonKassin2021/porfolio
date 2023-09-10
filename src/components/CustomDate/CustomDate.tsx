import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

interface ICustomDate extends DatePickerProps<any> {
  name: string;
  label?: string;
  value?: string;
  onChangeDate?: (value: any, name: string) => any;
}
export default function CustomDate({
  name,
  label,
  value,
  onChangeDate,
  ...rest
}: ICustomDate) {
  const [dfValue, setDfValue] = useState<Dayjs | null>(dayjs(value));

  useEffect(() => {
    setDfValue(dayjs(value));
  }, [value]);

  return (
    <Box className="mb-3 w-full">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="w-full"
          label={label}
          maxDate={dayjs(Date.now())}
          value={dfValue}
          onChange={(newValue) => {
            if (onChangeDate) onChangeDate(newValue, name);
          }}
          {...rest}
        />
      </LocalizationProvider>
    </Box>
  );
}
