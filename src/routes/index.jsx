import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/layout.jsx";
import Home from "../containers/Home";
import Login from "../containers/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/login" element={<Layout><Login /></Layout>} />
    </Routes>
  );
}

export default AppRoutes;
