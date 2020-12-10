import React, { Component } from "react";
import Title from "./components/Title";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Title/>
        <General 
          name="Sebastian" 
          lastname="Soto" 
          email="example@ex.com" 
          phone="1111111"
        />
        <Education/>
        <Experience/>
      </div>
    );
  }
}

export default App;