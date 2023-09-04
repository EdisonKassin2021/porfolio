/* eslint-disable @typescript-eslint/ban-types */

import { useReducer, useState, useEffect } from "react";

interface ILoginHooks {
  email: string;
  pwd: string;
}

export interface IValidateFunction<TAttributes> {
  ({ attributes }: { attributes: TAttributes }): any; // TODO: type "any"
}

interface IUseFormState<TAttributes = {}> {
  initialAttributes?: Partial<TAttributes>;
  validate?: IValidateFunction<TAttributes>;
  validateWarnings?: IValidateFunction<TAttributes>;
}

export interface IFormStateReducerAction {
  name: string;
  value: any;
}
export type TValue = IFormStateReducerAction["value"];
export type TName = IFormStateReducerAction["name"];

const formStateReducer = (state: any, action: IFormStateReducerAction) => {
  const { name, value } = action;
  return {
    ...state,
    [name]: value,
  };
};

function useFormState({
  initialAttributes,
  validate,
  validateWarnings,
}: IUseFormState<ILoginHooks>) {
  const [warnings, setWarnings] = useState<string | null>();
  const [errors, setErrors] = useState<any>();

  const [attributes, dispatch] = useReducer(
    formStateReducer,
    initialAttributes || {}
  );

  useEffect(() => {
    // should validate onChange, not on first render
    if (/* !isFirstRender && */ validate) {
      const errors = validate({ attributes });
      if (errors) {
        setErrors(errors);
      }
    }

    if (validateWarnings) {
      const warnings = validateWarnings({ attributes });
      if (warnings) {
        setWarnings(warnings);
      }
    }
    // TO BE DONE: refactor and remove eslint-disable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes]);

  const handleInputChange = (
    value: TValue,
    name: TName,
    formatValue?: ({ name, value }: IFormStateReducerAction) => TValue,
    formatName?: ({ name, value }: IFormStateReducerAction) => TName
  ) => {
    const newName = formatName ? formatName({ name, value }) : name;
    const newValue = formatValue ? formatValue({ name, value }) : value;
    const update = { name: newName, value: newValue };
    dispatch(update);
    return update;
  };

  return {
    attributes,
    errors,
    warnings,
    handleInputChange,
  };
}

export default useFormState;
