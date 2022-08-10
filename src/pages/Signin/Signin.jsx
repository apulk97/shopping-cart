import React from "react";

import { useForm, Controller } from "react-hook-form";

import "./Signin.scss";
import Button from "../../components/Button/Button";
import Inputbox from "../../components/Inputbox/Inputbox";

const Signin = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="signin-container">
      <div className="signin-container__heading">
        <h2>Login</h2>
        <p className="disclaimer">
          Get Access to your Orders, Wishlist and Recommendations
        </p>
      </div>
      <form className="signin-container__form">
        <Controller
          name="userID"
          control={control}
          rules={{
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email address is invalid",
            },
          }}
          render={({ field: { onChange, name, value } }) => (
            <Inputbox
              name={name}
              inputId={name}
              values={value}
              placeholder="Email"
              handleChange={(e) => onChange(e.target.value)}
              errors={errors && errors.userID?.message}
            />
          )}
        />
        <Controller
          name="userPwd"
          control={control}
          rules={{
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          render={({ field: { onChange, name, value } }) => (
            <Inputbox
              name={name}
              inputId={name}
              values={value}
              placeholder="Password"
              handleChange={(e) => onChange(e.target.value)}
              errors={errors && errors.userPwd?.message}
            />
          )}
        />
        <Button className="signin-button" onClick={handleSubmit(onSubmit)}>
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Signin;
