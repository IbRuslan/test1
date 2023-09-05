import React from 'react';
import Home from "./pages/Home/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails/BookDetails";
import BooksLists from "./pages/BooksLists/BooksLists";


const App = () => {
    return (
        <div className="wrapper">
            <Home/>
            <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Navigate to="/books" replace />} />
                        <Route path={'/books'} element={<BooksLists/>} />
                        <Route path={'/books/:booksId'} element={<BookDetails/>} />
                        <Route path={'*'} element={<NotFound/>} />
                    </Routes>
            </div>
        </div>
    );
};

export default App;


