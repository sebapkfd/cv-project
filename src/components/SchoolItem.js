import React from "react";
import uniqid from "uniqid";
import dateFormat from "./dateFormat";

const SchoolItem = (props) =>{
    
    const {schoolName, careerTitle, initialDate, endDate} = props;
    const initialDateFormat = dateFormat(initialDate);
    const endDateFormat = dateFormat(endDate);

    return (
        <div className="schoolItemDiv" key={uniqid()}>
            <p key={uniqid()}>School: {schoolName}</p>
            <p key={uniqid()}>Career: {careerTitle}</p>
            <p key={uniqid()}>From: {initialDateFormat}</p>
            <p key={uniqid()}>Until: {endDateFormat}</p>
        </div>
    )
}

export default SchoolItem;