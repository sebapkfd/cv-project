import React from "react";
import dateFormat from "./dateFormat";

const ExperienceItem = (props) =>{
    
    const {companyName, positionTitle, mainTasks, initialDate, endDate, id} = props.company;
    const initialDateFormat = dateFormat(initialDate);
    const endDateFormat = dateFormat(endDate);

    return (
        <div className="companyItemDiv">
            <p>Company: {companyName}</p>
            <p>Position: {positionTitle}</p>
            <p>Description: {mainTasks}</p>
            <p>From: {initialDateFormat}</p>
            <p>Until: {endDateFormat}</p>
            <button onClick={() => props.onDelete(id)}>
                Delete
            </button>
        </div>
    )
}

export default ExperienceItem;