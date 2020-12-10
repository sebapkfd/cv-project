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
        <General/>
        <Education/>
        <Experience/>
      </div>
    );
  }
}

export default App;