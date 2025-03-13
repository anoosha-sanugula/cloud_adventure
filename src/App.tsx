import "./App.css";
import Startpage from "./pages/startpage/Startpage";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register_page/Register";
import Login from "./pages/login_page/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
