import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {CategoriesType, SortType} from "../store/books-reducer";

type SuperSelectType = {
    values: string[]
    name: string
    selected: CategoriesType | SortType
    callback: (value: string) => void
}

export const SuperSelect: React.FC<SuperSelectType> = ({values, name, selected}) => {

    const [value, setValue] = useState(selected)

    const onChangeHandler = (event: SelectChangeEvent) => {
        if(event.target.value) {
            setValue(event.target.value as CategoriesType | SortType)
        }
    }

    return (
        <FormControl fullWidth sx={{marginRight: 5, margin: '10px'}}>
            <InputLabel id="demo-simple-select-label">{name}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={name}
                sx={{ backgroundColor: 'white' }}
                value={value}
                onChange={onChangeHandler}
            >
                {
                    values.map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)
                }
            </Select>
        </FormControl>
    );
};
