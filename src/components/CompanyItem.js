import React from "react";
import uniqid from "uniqid";
import dateFormat from "./dateFormat";

const CompanyItem = (props) =>{
    
    const {companyName, positionTitle, mainTasks,initialDate, endDate} = props;
    const initialDateFormat = dateFormat(initialDate);
    const endDateFormat = dateFormat(endDate);

    return (
        <div className="companyItemDiv" key={uniqid()}>
            <p key={uniqid()}>Company: {companyName}</p>
            <p key={uniqid()}>Position: {positionTitle}</p>
            <p key={uniqid()}>Description: {mainTasks}</p>
            <p key={uniqid()}>From: {initialDateFormat}</p>
            <p key={uniqid()}>Until: {endDateFormat}</p>
            <button onClick={() => props.onDelete(props.id)}>
                Delete
            </button>
        </div>
    )
}

export default CompanyItem;