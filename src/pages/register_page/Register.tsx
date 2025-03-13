import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "./User.type";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const registerUser=()=>{

  }
  return(
    <div className="register-container">
      <form onSubmit={handleSubmit(registerUser)}>
        <h3>Register Here!</h3>
        <div className="form-control">
          <label htmlFor="firstname">Firstname: </label>
          <input
            type="text"
            id="firstname"
            {...register("firstname", {
              required: true,
              minLength: {
                value: 5,
                message: "firstname must be at least 5 characters.",
              },
            })}
          />
          {errors.firstname && (
            <p className="errorMsg">firstname must be at least 5 characters</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="lastname">Lastname: </label>
          <input
            type="text"
            id="lastname"
            {...register("lastname", {
              required: true,
              minLength: {
                value: 5,
                message: "lastname must be at least 5 characters.",
              },
            })}
          />
          {errors.lastname && (
            <p className="errorMsg">lastname must be at least 5 characters</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters.",
              },
            })}
          />
          {errors.password && (
            <p className="errorMsg">Password must be at least 6 characters</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="profile_image">Profile_image: </label>
          <input {...register("profile_image")} type="file" />
        </div>
        <div className="form-control">
          <button className="register" type="submit">Register</button>
        </div>
        <div>
          <span className="login-text">Already have an account?</span>
          <span className="login">
            <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;

