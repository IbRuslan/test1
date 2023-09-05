import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {CategoriesType, SortType} from "../store/books-reducer";

type SuperSelectType = {
    values: string[]
    name: string
    selected: CategoriesType | SortType
    callback: (value: string) => void
}

export const SuperSelect: React.FC<SuperSelectType> = ({values, name, selected, ...props}) => {

    const onChangeHandler = (event: SelectChangeEvent) => {
        props.callback(event.target.value as CategoriesType | SortType)
    }

    return (
        <FormControl fullWidth sx={{marginRight: 5, margin: '10px'}}>
            <InputLabel id="demo-simple-select-label">{name}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={name}
                sx={{ backgroundColor: 'white' }}
                value={selected}
                onChange={onChangeHandler}
            >
                {
                    values.map((v, i) => <MenuItem key={i} value={v}>{v}</MenuItem>)
                }
            </Select>
        </FormControl>
    );
};
