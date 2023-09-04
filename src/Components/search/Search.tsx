import React, {ChangeEvent, useState} from 'react';
import s from './Search.module.css'

type SearchType = {
    callback: (title: string) => void
}

export const Search: React.FC<SearchType> = ({callback}) => {

    const [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div className={s.container} >
            <div>
                <input type="text" value={title} onChange={onChangeInputHandler}/>
            </div>
            <div>
                <button onClick={()=> callback(title)}>Search</button>
            </div>
        </div>
    );
};
