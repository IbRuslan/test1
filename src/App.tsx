import React from 'react';
import './scss/app.scss'
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart/Cart";


const App = () => {
    return (
        <div className="wrapper">
            <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Home/>} />
                        <Route path={'/cart'} element={<Cart/>} />
                        <Route path={'*'} element={<NotFound/>} />
                    </Routes>
            </div>
        </div>
    );
};

export default App;


