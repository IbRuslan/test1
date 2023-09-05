import React from 'react';
import {Navigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../store/store";
import s from './BookDetails.module.css'

const BookDetails = () => {

    const { booksId } = useParams();

    const books = useAppSelector(state => state.books.books);

    const book = books.find(book => book.id === booksId);

    if (!book) {
        return <Navigate to="/*" replace />;
    }

    return (
        <div className={s.container}>
            <div className={s.wrapperImg}>
                <img src={book?.volumeInfo.imageLinks.thumbnail} alt="book"/>
            </div>
            <div className={s.info}>
                <div>
                    <span>{book?.volumeInfo.categories.join('/')}</span>
                    <h3>{book?.volumeInfo.title}</h3>
                    <span>{book?.volumeInfo.authors}</span>
                    <div className={s.description}>
                        <p>{book?.volumeInfo.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;