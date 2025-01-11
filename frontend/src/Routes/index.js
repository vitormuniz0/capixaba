import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Content from "../Pages/Content";

const RoutesAplication = () => {
    return(
        <BrowserRouter >
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/content" element={<Content/>}/>
                <Route render={() => <h1>NotFound</h1>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesAplication;