import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Content from "../Pages/Content";
import LoginAdmin from "../Pages/Admin";
import { PrivateRoute } from "./privateRoute";
import HomeAdmin from "../Pages/HomeAdmin";

const RoutesAplication = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/homeAdmin" element={<HomeAdmin />} />
        {/* Rotas protegidas */}
        <Route element={<PrivateRoute />}>
          
        </Route>
        {/* Rota 404 */}
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesAplication;