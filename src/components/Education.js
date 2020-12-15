import React, { useState } from "react";
import uniqid from "uniqid";
import EducationItem from "./EducationItem";
import EducationForm from "./EducationForm";

const Education = () => {
    const [school, setSchool] = useState({
        id: uniqid(),
        schoolName: "",
        careerTitle: "",
        initialDate: "",
        endDate: ""
    })
    const [schools, setSchools] = useState([]);
    const [formActive, setFormActive] = useState(false);

      
    const handleChange = (e) => {
        const {name, value} = e.target;
        setSchool({...school, [name]: value});
    }

    const submitSchool = (e) =>{
        e.preventDefault();
        let isValid = true;
        for (let key in school){
            if (school[key] === "") {
                isValid = false;
            }
        }
        if(isValid){
            setSchools([...schools, school]);
            renderForm(e);
        }
    }

    const resetForm = () => {
        setSchool({
            id: uniqid(),
            schoolName: "",
            careerTitle: "",
            initialDate: "",
            endDate: ""
        });
    }

    const handleDelete = (itemId) => {
        const filteredSchools = schools.filter( school => school.id !== itemId);
        setSchools(filteredSchools);
    }

    const cleanEducation = (e) =>{
        e.preventDefault();
        setSchools([]);
    }

    const renderForm = (e) => {
        e.preventDefault();
        setFormActive(!formActive);
        resetForm();
    }

    let formComponent;
    let formButton;
    let cleanButton;
    if(formActive) {
      formComponent = <EducationForm
        school={school}
        onSubmit={submitSchool}
        onChange={handleChange}
        onRender={renderForm}
      />
    }else{
      formButton = <div>
        <button onClick={renderForm} className="sectionButton" >Add School</button>
      </div>
    }

    if(schools.length > 0){
      cleanButton = <div>
        <button onClick={cleanEducation}>Clean</button>
      </div>
    }

    return (
      <div className='EducationDiv'>
        <div className="sectionTitleDiv">
          <h2>Education</h2>
          {formButton}
          {cleanButton}
        </div>
        {formComponent}
        
        <div>
          {schools.map((school) => {
            return (
              <EducationItem
                key={school.id}
                school={school}
                onDelete={handleDelete}
              />
            )
          })}
        </div>
      </div>
    );
}

export default Education;