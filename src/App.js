import React, { Component } from "react";
import Title from "./components/Title";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor() {
    super();
    this.state = {
      school: {
        schoolName: " ",
        careerTitle: " ",
        initialDate: " ",
        endDate: " "
      },
      schools: [],
      company: {
        companyName: " ",
        positionTitle: " ",
        mainTasks: " ",
        initialDate: " ",
        endDate: " ",
      },
      companies: []

    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  handleChange = (e) => {
    console.log(e);
    const {name, value} = e.target;
    this.setState(prevState => {
      let school = Object.assign({}, prevState.school);
      school[name] = value;
      return { school };                                
    })
  };

  onSubmitTask = (e) =>{
    e.preventDefault();
    this.setState({
      schools: [...this.state.schools, this.state.school]
    })

    this.resetForm();
  }

  resetForm = () => {
    this.setState((prevState) => {
      let school = Object.assign({}, prevState.school);
      school["schoolName"] = " ";
      school["careerTitle"] = " ";
      school["initialDate"] = " ";
      school["endDate"] = " ";
      return { school };                       
    })
  }

  render() {
    const {school, schools} = this.state;
    const {company, companies} = this.state;
    
    return (
      <div className='App'>
        <Title/>
        
        <General 
          name="Sebastian" 
          lastname="Soto" 
          email="example@ex.com" 
          phone="1111111"
        />
        
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
              type="text"
              name="initialDate"
            />
            <br/>
            <label>Enter Final Date</label>
            <input
              onChange={this.handleChange}
              value={school.endDate}
              type="text"
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
      <Education schools={schools}/>
      
      <div className="formDiv">
        <form onSubmit={this.onSubmitTask}>
          <div className="form-group">
            <label htmlFor="experienceInput">Enter Company Name</label>
            <input
              onChange={this.handleChange}
              value={company.companyName}
              type="text"
              name="companyName"
            />
            <br/>
            <label>Enter Position title</label>
            <input
              onChange={this.handleChange}
              value={company.positionTitle}
              type="text"
              name="positionTitle"
            />
            <br/>
            <label>Enter Desciption</label>
            <input
              onChange={this.handleChange}
              value={company.mainTasks}
              type="text"
              name="mainTasks"
            />
            <br/>
            <label>Enter Initial Date</label>
            <input
              onChange={this.handleChange}
              value={company.initialDate}
              type="text"
              name="initialDate" //
            />
            <br/>
            <label>Enter Final Date</label>
            <input
              onChange={this.handleChange}
              value={company.endDate} 
              type="text"
              name="endDate" //
            />
          </div>
          <div className="form-group">
            <button type="submit" >
              Add Company
            </button>
          </div>
        </form>
      </div>

      <Experience companies={companies}/>

      </div>
    );
  }
}

export default App;