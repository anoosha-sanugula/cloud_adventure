import "./Startpage.css";
import {useNavigate } from "react-router-dom";
const Startpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hey!!! Welcome to Cloud_Adventure</h1>
      <button onClick={() => navigate("register")}>Register</button>
      <button onClick={() => navigate("login")}>Login</button>
    </div>
  );
};

export default Startpage;
