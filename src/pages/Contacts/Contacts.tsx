import { Box } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import useFormState from "../../hooks/useFormState";
import _ from "lodash";
import validator from "validator";

const Contacts = () => {
  const { attributes, handleInputChange, errors } = useFormState({
    initialAttributes: {
      email: "",
      username: "",
      message: "",
    },
    validate: ({ attributes }: any) => {
      const errors: any = {};

      if (!validator.isEmail(attributes.email)) {
        errors["email"] = "Ceci n'est pas un email correct!";
      }

      _.forEach(_.keys(attributes), (key: string) => {
        if (_.isEmpty(attributes[key])) {
          errors[key] = "Ce champ ne doit pas être vide";
        }
      });

      return errors;
    },
  });
  return (
    <Box>
      <ContactHeader />
      <ContactForm
        onChange={handleInputChange}
        attributes={attributes}
        errors={errors}
      />
    </Box>
  );
};

export default Contacts;
