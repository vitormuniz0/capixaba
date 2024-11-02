import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Content from "../Pages/Content";

const RoutesAplication = () => {
    return(
        <BrowserRouter basename="/capixaba">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/content" element={<Content/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesAplication;