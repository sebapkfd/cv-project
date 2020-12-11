import React, { Component } from "react";
import uniqid from "uniqid";
import SchoolItem from "./SchoolItem";

class Education extends Component{
  constructor(){
    super();
    this.state = {
      school: {
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
      school["schoolName"] = "";
      school["careerTitle"] = "";
      school["initialDate"] = "";
      school["endDate"] = "";
      return { school };                       
    })
  };

  render(){
    const {school, schools} = this.state;

    return (
      <div className='EducationDiv'>
        <div className="formDiv">
          <form onSubmit={this.onSubmitTask}>
            <div className="form-group">
              <label htmlFor="schoolInput">Enter School</label>
              <input
                onChange={this.handleChange}
                value={school.schoolName}
                type="text"
                name="schoolName"
              />
              <br/>
              <label>Enter Career</label>
              <input
                onChange={this.handleChange}
                value={school.careerTitle}
                type="text"
                name="careerTitle"
              />
              <br/>
              <label>Enter Initial Date</label>
              <input
                onChange={this.handleChange}
                value={school.initialDate}
                type="date"
                name="initialDate"
              />
              <br/>
              <label>Enter Final Date</label>
              <input
                onChange={this.handleChange}
                value={school.endDate}
                type="date"
                name="endDate"
              />
            </div>
            <div className="form-group">
              <button type="submit" >
                Add School
              </button>
            </div>
          </form>
        </div>
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
      </div>
  )}
}


export default Education;