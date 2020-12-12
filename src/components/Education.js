import React, { Component } from "react";
import uniqid from "uniqid";
import SchoolItem from "./SchoolItem";
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
    }
  }
  
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState(prevState => {
      let school = Object.assign({}, prevState.school);
      school[name] = value;
      return { school };
    })
  };

  onSubmitTask = (e) =>{
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
      })
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState((prevState) => {
      let school = Object.assign({}, prevState.school);
      school["id"] = uniqid();
      school["schoolName"] = "";
      school["careerTitle"] = "";
      school["initialDate"] = "";
      school["endDate"] = "";
      return { school };                       
    })
  };

  handleDelete = (itemId) => {
    const schools = this.state.schools.filter( school => school.id !== itemId);
    this.setState({schools : schools});
  }

  render(){
    const {school, schools} = this.state;

    return (
      <div className='EducationDiv'>
        <EducationForm
          school={school}
          onSubmit={this.onSubmitTask}
          onChange={this.handleChange}
        />
        <div>
          {schools.map((school) => {
            return (
              <SchoolItem
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