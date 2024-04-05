import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../styles/inputWithLabelAndTitle.css";

interface InputWithLabelAndTitleProps{
    label: string,
    title: string,
    messageBox: boolean,
}

const MAX_ROWS = 10;

const InputWithLabelAndTitle = (props: InputWithLabelAndTitleProps) => {
    const {label, title, messageBox} = props
    return (
        <>
            <p>{title}</p>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className="input"
            >
                <TextField label={label} title={title} multiline={messageBox} rows={messageBox ? MAX_ROWS : undefined } fullWidth={messageBox} />
            </Box> 
        </>
    );
};

export default InputWithLabelAndTitle;