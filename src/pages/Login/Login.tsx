// import { useState } from "react";
import DefaultModal from "../../components/Modal/DefaultModal";
import CustomTextfield from "../../components/CustomTextfield/CustomTextfield";
import { INPUT_TYPE } from "../../utils/constants/actions";
import { teal } from "../../assets/colors";
import useLoginState from "../../hooks/useLoginState";
import supabase from "../../configs/supabase";
import { useAppDispatch } from "../../redux/app/hooks";
import {
  loginFailed,
  loginSuccessfully,
} from "../../redux/features/login/LoginSlice";
import { useState } from "react";
import { AuthError } from "@supabase/supabase-js";
// import { AuthError } from "@supabase/supabase-js";

interface ILogin {
  open: boolean;
  onClose: () => void;
}
const Login = ({ open, onClose }: ILogin) => {
  const dispatch = useAppDispatch();
  const [err, setErr] = useState<AuthError | undefined>(undefined);

  const { attributes, handleInputChange, disabled, errors } = useLoginState({
    email: "",
    pwd: "",
  });

  const handleLogin = async () => {
    //Ref: https://supabase.com/dashboard/project/hmexluljreaekzdfulwg/api?page=users
    const { data, error } = await supabase.auth.signInWithPassword({
      email: attributes.email,
      password: attributes.pwd,
    });

    if (error) {
      setErr(err);
      dispatch(
        loginFailed({
          error,
        })
      );
    } else {
      const { user, session } = data;
      dispatch(
        loginSuccessfully({
          user,
          session,
          created_at: user.created_at,
          token: session.access_token,
          email: user.email ?? attributes.email,
        })
      );

      onClose();
    }
  };

  return (
    <DefaultModal
      open={open}
      onClose={onClose}
      onAction={handleLogin}
      title="Se connecter"
      actionButtonTxt="Se connecter"
      actionButtonClassName="shadow-md cursor-pointer"
      disabled={disabled}
      actionButtonStyle={
        !disabled
          ? {
              background: teal,
              color: "#fff",
            }
          : {
              background: "#fff",
              color: teal,
            }
      }
    >
      <div className="p-3">
        <CustomTextfield
          id={"email"}
          name="email"
          error={errors?.email}
          label="Email"
          onChange={handleInputChange}
          value={attributes.email}
        />
      </div>
      <div className="p-3">
        <CustomTextfield
          id={"pwd"}
          name="pwd"
          error={errors?.pwd}
          label="Password"
          type={INPUT_TYPE.PASSWORD}
          onChange={handleInputChange}
          value={attributes.pwd}
        />
      </div>

      {err && <div>{err.message}</div>}
    </DefaultModal>
  );
};

export default Login;
