import React from "react";
import uniqid from "uniqid";

const SchoolItem = (props) =>{
    
    const {schoolName, careerTitle, initialDate, endDate} = props;
    return (
        <div className="schoolItemDiv" key={uniqid()}>
            <p key={uniqid()}>School: {schoolName}</p>
            <p key={uniqid()}>Career: {careerTitle}</p>
            <p key={uniqid()}>From: {initialDate}</p>
            <p key={uniqid()}>Until: {endDate}</p>
        </div>
    )
}

export default SchoolItem;