import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/layout.jsx";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
