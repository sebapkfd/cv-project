import React, { Component } from "react";
import Title from "./components/Title";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Title/>
        <General/>
        <Education/>
        <Experience/>
        <Skills/>
      </div>
    );
  }
}

export default App;