import { Box } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";

const CVIdentity = () => {
  return (
    <Box className="flex items-center justify-between">
      <div
        style={{
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        Saturnin Edison Tchola KASSIN
      </div>
      <Box className="flex flex-col gap-3 justify-center">
        <Info Icon={<PhoneIphoneIcon />} information={"+221 78 119 23 94"} />
        <Info
          Icon={<MailIcon />}
          information={"kassinsaturninedison@gmail.com"}
        />
        <Info Icon={<HomeIcon />} information={"Dakar, Sénégal"} />
      </Box>
    </Box>
  );
};

const Info = ({
  Icon,
  information,
}: {
  Icon: any;
  information: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-3">
      <span>{Icon}</span>
      <span>{information}</span>
    </div>
  );
};
export default CVIdentity;
