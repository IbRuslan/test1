import React from 'react';
import {BooksItem} from "../../api/api";
import s from './CartItem.module.css'

type CartItemType = {
    book: BooksItem
}

export const CartItem: React.FC<CartItemType> = ({book, ...props}) => {

    return (
        <div className={s.item}>
            <div>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="book"/>
            </div>
            <div>
                <span>{book.volumeInfo.categories[0]}</span>
                <h2>{book.volumeInfo.title}</h2>
                <span>{book.volumeInfo.authors[0]}</span>
            </div>
        </div>
    );
};
