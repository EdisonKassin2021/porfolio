import _ from "lodash";
import useFormState from "./useFormState";
import { useEffect, useState } from "react";
import validator from "validator";

interface ILoginHooks {
  email: string;
  pwd: string;
}

function useLoginState(initialAttributes: ILoginHooks) {
  const [disabled, setDisabled] = useState(false);

  const { attributes, errors, warnings, handleInputChange } = useFormState({
    initialAttributes: initialAttributes,
    validate: ({ attributes }) => {
      const errors: any = {};

      if (!validator.isEmail(attributes.email)) {
        errors["email"] = "This value is not an email";
      }

      if (_.isEmpty(attributes.email)) {
        errors["email"] = "This value can't be empty";
      }

      if (_.isEmpty(attributes.pwd)) {
        errors["pwd"] = "This value can't be empty";
      }
      return errors;
    },
  });

  useEffect(() => {
    setDisabled(!_.isEmpty(errors));
  }, [errors]);

  return {
    errors,
    warnings,
    disabled,
    attributes,
    handleInputChange,
  };
}

export default useLoginState;
