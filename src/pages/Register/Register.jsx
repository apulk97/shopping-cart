import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";

import "../Signin/Signin.scss";
import Button from "../../components/Button/Button";
import Inputbox from "../../components/Inputbox/Inputbox";

const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [confirmPwdError, setPasswordError] = useState();

  const onSubmit = (data) => {
    console.log(data);
    if (data?.userPwd !== data?.confirmPwd) {
      setPasswordError("Password do not match");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-container__heading">
        <h2>Sign Up</h2>
        <p className="disclaimer">We do not share your personal details</p>
      </div>
      <form className="signin-container__form">
        <Controller
          name="firstName"
          control={control}
          rules={{
            required: "This field is required",
          }}
          render={({ field: { onChange, name, value } }) => (
            <Inputbox
              name={name}
              inputId={name}
              values={value}
              placeholder="First Name"
              handleChange={(e) => onChange(e.target.value)}
              errors={errors && errors.firstName?.message}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          rules={{
            required: "This field is required",
          }}
          render={({ field: { onChange, name, value } }) => (
            <Inputbox
              name={name}
              inputId={name}
              values={value}
              placeholder="Last Name"
              handleChange={(e) => onChange(e.target.value)}
              errors={errors && errors.lastName?.message}
            />
          )}
        />
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
        <Controller
          name="confirmPwd"
          control={control}
          rules={{
            required: "This field is required",
          }}
          render={({ field: { onChange, name, value } }) => (
            <Inputbox
              name={name}
              inputId={name}
              values={value}
              placeholder="Confirm Password"
              handleChange={(e) => onChange(e.target.value)}
              errors={(errors && errors.confirmPwd?.message) || confirmPwdError}
            />
          )}
        />
        <Button className="signin-button" onClick={handleSubmit(onSubmit)}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
