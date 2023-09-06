import React from 'react';
import Home from "./Components/Home/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails/BookDetails";
import BooksLists from "./pages/BooksLists/BooksLists";
import {GlobalError} from "./Components/GlobalError/GlobalError";


const App = () => {
    return (
        <div>
            <Home/>
            <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Navigate to="/books" replace />} />
                        <Route path={'/books'} element={<BooksLists/>} />
                        <Route path={'/books/:booksId'} element={<BookDetails/>} />
                        <Route path={'*'} element={<NotFound/>} />
                    </Routes>
            </div>
            <GlobalError/>
        </div>
    );
};

export default App;


