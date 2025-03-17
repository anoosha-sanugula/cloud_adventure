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
  const navigate = useNavigate();
  const registerUser: SubmitHandler<User> = async (user: any) => {
    const formData = new FormData();
    formData.append("firstname", user.firstname);
    formData.append("lastname", user.lastname);
    formData.append("password", user.password);

    if (user.profile_image && user.profile_image[0]) {
      formData.append("profile_image", user.profile_image[0]);
    } else {
      console.log("No profile image uploaded or file input is missing.");
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API}/users`,
        {
          method: "POST",
          body: formData,
        }
      );

      const userdata = await response.json();

      if (response.ok) {
        localStorage.setItem("userdata", JSON.stringify(user));

        const token = userdata.accessToken;
        if (token) {
          localStorage.setItem("accessToken", token);
        }
        navigate("/home", { replace: true });
      } else {
        alert(userdata.message);
      }
    } catch (error) {
      console.error("Error occurred during form submission:", error);
      alert("There was an error while submitting the form.");
    } finally {
      reset();
    }
  };

  return (
    <div className="register-container">
      <video width={800} height={500} controls loop autoPlay muted>
        <source
          src="https://den3dh5dcjk1i.cloudfront.net/demo_video.mp4"
          type="video/mp4"
        />
      </video>
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
          <button className="register" type="submit">
            Register
          </button>
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
