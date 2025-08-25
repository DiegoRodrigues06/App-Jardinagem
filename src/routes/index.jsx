import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import SecPage from "../containers/PaginaSecreta";  

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/PaginaSecreta" element={<SecPage />}></Route>
    </Routes>
  );
}

export default AppRoutes;
