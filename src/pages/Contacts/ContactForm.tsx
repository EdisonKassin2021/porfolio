import { Box, Button } from "@mui/material";
import CustomTextfield from "../../components/CustomTextfield/CustomTextfield";
import { White } from "../../assets/colors";
import { INPUT_TYPE } from "../../utils/constants/actions";
import _ from "lodash";

const ContactForm = ({
  onChange,
  attributes,
  errors,
}: {
  onChange: (value: string, name: string) => void;
  errors: object;
  attributes: {
    email: string;
    username: string;
    message: string;
  };
}) => {
  return (
    <Box className="p-10">
      <div>
        <CustomTextfield
          name="username"
          id="username"
          placeholder="Nom & Prenoms"
          value={attributes.username}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <CustomTextfield
          name="email"
          id="email"
          placeholder="Entrer votre adresse email"
          type={INPUT_TYPE.EMAIL}
          value={attributes.email}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <CustomTextfield
          name="message"
          id="message"
          multiline
          rows={10}
          placeholder="Saisissez votre message ici!"
          value={attributes.message}
          onChange={onChange}
          required
        />
      </div>

      <div className="flex justify-end items-center">
        <Button
          disabled={!_.isEmpty(errors)}
          style={{
            background: "#092347",
            color: White,
            padding: "10px",
          }}
        >
          Envoyer le message
        </Button>
      </div>
    </Box>
  );
};

export default ContactForm;
