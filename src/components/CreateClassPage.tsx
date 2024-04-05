import React from "react";
import "../styles/createClassPage.css";
import InputWithLabelAndTitle from "./InputWithLabelAndTitle";

const CreateClassPage = () => {
    return (
        <div className="page-container" >
            <h1>New Class Listing</h1>
            <InputWithLabelAndTitle title="What is the name of your class?" label="Classname..."/>
            <InputWithLabelAndTitle title="What subject does your class focus on?" label="Subject..."/>
        </div>
    );
};

export default CreateClassPage;