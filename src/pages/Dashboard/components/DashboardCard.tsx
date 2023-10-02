import { Divider, InputLabel, Tooltip } from "@mui/material";
import { Teal } from "../../../assets/colors";
import { Textfit } from "react-textfit";

interface IDashboardCard {
  backgroundColor?: string;
  label: string;
  value: string;
}
const DashboardCard = ({
  backgroundColor = Teal,
  label,
  value,
}: IDashboardCard) => {
  return (
    <div
      style={{
        width: "250px",
        height: "150px",
        flexShrink: 0,
        background: backgroundColor,
      }}
      className="shadow-md rounded-sm mx-3"
    >
      <Textfit mode="single">
        <div className="p-3">
          <Tooltip title={label}>
            <InputLabel className="p-3 text-center font-bold text-xl">
              {label}
            </InputLabel>
          </Tooltip>
        </div>
      </Textfit>
      <Divider />
      <div className="p-5 flex items-center justify-center text-3xl font-semibold">
        {value}
      </div>
    </div>
  );
};

export default DashboardCard;
