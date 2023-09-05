import React from 'react';
import {BooksItem} from "../../api/api";
import s from './CartItem.module.css'

type CartItemType = {
    book: BooksItem
}

export const CartItem: React.FC<CartItemType> = ({book, ...props}) => {

    const image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''

    return (
        <div className={s.item}>
            <div className={s.img}>
                <img src={image} alt="book"/>
            </div>
            <div>
                <span>{book.volumeInfo.categories? book.volumeInfo.categories.join('/') : ''}</span>
                <h2>{book.volumeInfo.title}</h2>
                <span>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}</span>
            </div>
        </div>
    );
};
