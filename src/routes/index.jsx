import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
