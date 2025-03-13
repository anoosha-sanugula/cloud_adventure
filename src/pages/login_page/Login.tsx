import "./Login.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Credentials } from "./Credential.type";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Credentials>();

  const loginUser=() => {
    
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(loginUser)}>
        <h3>Login Here!</h3>
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
          <button className="login-btn" type="submit">Login</button>
        </div>
        <div>
          <span className="register-text">Don't have an account?</span>
          <span className="register-text-btn">
            <Link to="/register">Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;