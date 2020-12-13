import React, { Component } from "react";
import uniqid from "uniqid";
import EducationItem from "./EducationItem";
import EducationForm from "./EducationForm";

class Education extends Component{
  constructor(){
    super();
    this.state = {
      school: {
        id: uniqid(),
        schoolName: "",
        careerTitle: "",
        initialDate: "",
        endDate: ""
      },
      schools: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitSchool = this.submitSchool.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.cleanEducation = this.cleanEducation.bind(this);
  }
  
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState(prevState => {
      let school = Object.assign({}, prevState.school);
      school[name] = value;
      return { school };
    });
  }

  submitSchool = (e) =>{
    e.preventDefault();
    const {school} = this.state;
    let isValid = true;
    for (let key in school){
      if (school[key] === "") {
        isValid = false;
      }
    }
    if(isValid){
      this.setState({
        schools: [...this.state.schools, this.state.school]
      });
      this.resetForm();
    }
  }

  resetForm = () => {
    this.setState((prevState) => {
      let school = Object.assign({}, prevState.school);
      school["id"] = uniqid();
      school["schoolName"] = "";
      school["careerTitle"] = "";
      school["initialDate"] = "";
      school["endDate"] = "";
      return { school };                       
    });
  }

  handleDelete = (itemId) => {
    const schools = this.state.schools.filter( school => school.id !== itemId);
    this.setState({schools : schools});
  }

  cleanEducation = (e) =>{
    e.preventDefault();
    this.setState({schools: [] });
  }

  render(){
    const {school, schools} = this.state;

    return (
      <div className='EducationDiv'>
        <EducationForm
          school={school}
          onSubmit={this.submitSchool}
          onChange={this.handleChange}
        />
        <div>
          <button onClick={this.cleanEducation}>
            Clean
          </button>
        </div>
        <div>
          {schools.map((school) => {
            return (
              <EducationItem
                key={school.id}
                school={school}
                onDelete={this.handleDelete}
              />
            )
          })}
        </div>
      </div>
  )}
}


export default Education;