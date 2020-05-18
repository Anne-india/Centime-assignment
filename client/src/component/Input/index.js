import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { useFormControlStyles } from "../../utils";

const InputComponent = ({ id, className, label, helperText, ...input }) => {
    const classes = useFormControlStyles();
    return (
        <FormControl className={`${classes.formControl} ${className}`}>
            <TextField
                id={`imput_${id}`}
                label={label}
                helperText={helperText}
                {...input} />
        </FormControl>
    );
}

export default InputComponent;