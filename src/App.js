import React, { Component } from "react";
import Title from "./components/Title";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor() {
    super();
    this.state = {
      school : {
        schoolName: " ",
        careerTitle: " ",
        initialDate: " ",
        endDate: " "
      },
      schools : []
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    this.setState(prevState => {
      let school = Object.assign({}, prevState.school);
      school[name] = value;
      return { school };                                
    })
    console.log(this.state.school);
  };

  onSubmitTask = (e) =>{
    e.preventDefault();
    this.setState({
      schools: [...this.state.schools, this.state.school]
    })

    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      school: { ...this.state.school,
        schoolName : " ",
        careerTitle : " ",
        initialDate : " ",
        endDate : " "
      }
    })
  }

  render() {
    const {school, schools} = this.state;
    
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
              value={school.schoolName.value}
              type="text"
              name="schoolName"
            />
            <br/>
            <label>Enter Career</label>
            <input
              onChange={this.handleChange}
              value={school.careerTitle.value}
              type="text"
              name="careerTitle"
            />
            <br/>
            <label>Enter Initial Date</label>
            <input
              onChange={this.handleChange}
              value={school.initialDate.value}
              type="text"
              name="initialDate"
            />
            <br/>
            <label>Enter Final Date</label>
            <input
              onChange={this.handleChange}
              value={school.endDate.value}
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

        {/* <Education 
          schoolName = "Udp" 
          careerTitle = "Software Engineer" 
          initialDate = "March 1st, 2017" 
          endDate = "December 1st, 2020"
        /> */}
        
        {/* <Experience 
          companyName = "Example"
          positionTitle = "Software Engineer"
          mainTasks = "Development"
          initialDate = "December 2nd 2020"
          endDate = "Current"
        /> */}
      </div>
    );
  }
}

export default App;