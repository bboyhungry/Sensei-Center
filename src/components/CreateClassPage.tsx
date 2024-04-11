import React from "react";
import "../styles/createClassPage.css";
import InputWithLabelAndTitle from "./InputWithLabelAndTitle";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

const CreateClassPage = () => {
    return (
        <div className="page-container">
            <FontAwesomeIcon icon={ faCircleLeft } className="back-icon" />

            <h1>New Class Listing</h1>
            <InputWithLabelAndTitle title="What is the name of your class?" label="Classname..." messageBox={false}/>
            <InputWithLabelAndTitle title="What subject does your class focus on?" label="Subject..." messageBox={false}/>
            <InputWithLabelAndTitle title="Write a description for your class, and what students can expect to learn from it." label="Your description..." messageBox={true}/>
            <p>Upload a picture so students can see who you are.</p>
            <p>Please specify your hourly rate for your class.</p>
            <FormControl className="hourly-rate-input">
                <OutlinedInput
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            <p>When are your classes available?</p>
        </div>
    );
};

export default CreateClassPage;