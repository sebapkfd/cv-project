import React from "react";
import dateFormat from "./dateFormat";

const SchoolItem = (props) =>{
    
    const {schoolName, careerTitle, initialDate, endDate, id} = props.school;
    const initialDateFormat = dateFormat(initialDate);
    const endDateFormat = dateFormat(endDate);

    return (
        <div className="schoolItemDiv">
            <p>School: {schoolName}</p>
            <p>Career: {careerTitle}</p>
            <p>From: {initialDateFormat}</p>
            <p>Until: {endDateFormat}</p>
            <button onClick={() => props.onDelete(id)}>
                Delete
            </button>
        </div>
    )
}

export default SchoolItem;