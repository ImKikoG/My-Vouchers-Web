import React, { useState } from "react";
import CustomInput from "../../common/components/CustomInput";
import CustomButton from "../../common/components/CustomButton";
import { useAuth } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
    } catch (e) {
      alert(e);
    }

    setLoading(false);
  };

  return (
    <div className="login-page-container">
      <div className="login-title">
        <h1 className="color-dark-blue">My Vouchers</h1>
        <h1 className="color-white">Login</h1>
      </div>
      <form
        className="login-inputs"
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <CustomInput
          inputType={"email"}
          placeholder={"Email"}
          setValue={setEmail}
        />
        <CustomInput
          inputType={"password"}
          placeholder={"Password"}
          setValue={setPassword}
        />
        <CustomButton
          disabled={loading}
          inputText={"Log in"}
          onClick={() => {}}
        />
      </form>
    </div>
  );
}
