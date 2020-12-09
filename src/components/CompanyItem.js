import React from "react";
import uniqid from "uniqid";

const CompanyItem = (props) =>{
    
    const {companyName, positionTitle, mainTasks,initialDate, endDate} = props;
    return (
        <div className="companyItemDiv" key={uniqid()}>
            <p key={uniqid()}>Company: {companyName}</p>
            <p key={uniqid()}>Position: {positionTitle}</p>
            <p key={uniqid()}>Description: {mainTasks}</p>
            <p key={uniqid()}>From: {initialDate}</p>
            <p key={uniqid()}>Until: {endDate}</p>
        </div>
    )
}

export default CompanyItem;