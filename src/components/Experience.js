import React from "react";
import uniqid from "uniqid";
import CompanyItem from "./CompanyItem";

const Experience = (props) =>{
    const {companies} = props;
    
    return (
        <div key={uniqid()}>
      {companies.map((company) => {
          return (
              <CompanyItem 
                companyName={company.schoolName}
                positionTitle={company.careerTitle}
                mainTasks={company.mainTasks}
                initialDate={company.initialDate}
                endDate={company.endDate}
                key={uniqid()}
              />
          )
      })}
    </div>
    )

}

export default Experience;