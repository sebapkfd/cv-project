import React, { Component } from "react";
import Title from "./components/Title";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor() {
    super();
    this.state = {
      aux : []
    }
  }

  render() {
    return (
      <div className='App'>
        <Title/>
        
        <General name="Sebastian" lastname="Soto" email="example@ex.com" phone="1111111"/>
        
        <Education schoolName = "Udp" 
        careerTitle = "Software Engineer" 
        initialDate = "March 1st, 2017" 
        endDate = "December 1st, 2020"/>
        
        <Experience companyName = "Example"
        positionTitle = "Software Engineer"
        mainTasks = "Development"
        initialDate = "December 2nd 2020"
        endDate = "Current"
        />
      </div>
    );
  }
}

export default App;