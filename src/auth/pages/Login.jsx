import React from "react";
import CustomInput from "../../common/components/CustomInput";
import CustomButton from "../../common/components/CustomButton";

export default function Login() {
  return (
    <div className="login-page-container">
      <div className="login-title">
        <h1 className="color-dark-blue">My Vouchers</h1>
        <h1 className="color-white">Login</h1>
      </div>
      <form
        className="login-inputs"
        onSubmit={() => {
          console.log("Works");
        }}
      >
        <CustomInput inputType={"email"} placeholder={"Email"} />
        <CustomInput inputType={"password"} placeholder={"Password"} />
        <CustomButton inputText={"Log in"} onClick={() => {}} />
      </form>
    </div>
  );
}
