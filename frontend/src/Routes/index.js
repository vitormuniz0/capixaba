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
        <Route path="*" element={<h1>NotFound</h1>} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/homeAdmin" element={<PrivateRoute />}>
          <Route path="/homeAdmin" element={<HomeAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesAplication;
