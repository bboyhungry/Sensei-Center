import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../styles/inputWithLabelAndTitle.css";

interface InputWithLabelAndTitleProps{
    label: string,
    title: string,
}

const InputWithLabelAndTitle = (props: InputWithLabelAndTitleProps) => {
    const {label, title} = props
    return (
        <>
            <p>{title}</p>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className="input"
            >
                <TextField label={label} />
            </Box>
        </>
    );
};

export default InputWithLabelAndTitle;