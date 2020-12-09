import React from "react";
import uniqid from "uniqid";
import SchoolItem from "./SchoolItem";

const Education = (props) =>{
    const {schools} = props;
    
    return (
        <div key={uniqid()}>
      {schools.map((school) => {
          return (
              <SchoolItem 
                schoolName={school.schoolName}
                careerTitle={school.careerTitle}
                initialDate={school.initialDate}
                endDate={school.endDate}
                key={uniqid()}
              />
          )
      })}
    </div>
    )

}

export default Education;