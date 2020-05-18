import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { useFormControlStyles } from "../../utils";

const SelectComponent = ({ id, label, className, formHelperText, menuItem, ...input }) => {
    const classes = useFormControlStyles();

    const renderMenuItem = () => {
        const items = [];
        menuItem.forEach(({ incomeType }) => {
            if (items.indexOf(incomeType) === -1) {
                items.push(incomeType);
            }
        });
        return items.map(item => {
            return (
                <MenuItem key={item} value={item}>{item}</MenuItem>
            );
        })
    }

    return (
        <FormControl className={`${classes.formControl} ${className}`}>
            <InputLabel id={`label_${id}`}>{label}</InputLabel>
            <Select
                labelId={`label_${id}`}
                id={`select_${id}`}
                {...input}
            >
                {menuItem.length !== 0 ? renderMenuItem() : ''}
            </Select>
            <FormHelperText>{formHelperText}</FormHelperText>
        </FormControl>
    );
};

export default SelectComponent;