import React, {Component} from "react";
import GeneralForm from "./GeneralForm"

class General extends Component{
  constructor() {
    super();
    this.state = {
      info : {
        name: "",
        lastname: "",
        phone: "",
        email: ""
      },
      formActive: false,
      infoAdded: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cleanInfo = this.cleanInfo.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const profile = {
      name : e.target.name.value,
      lastname : e.target.lastname.value,
      phone : e.target.phone.value,
      email : e.target.email.value
    };
    let isValid = true;
    for (let key in profile){
      if(profile[key] === ""){
        isValid = false;
      }
    }
    if(isValid){
      this.setState({info : profile});
      this.setState({infoAdded: true});
      this.renderForm(e);
    }
  }

  cleanInfo = (e) => {
    e.preventDefault();
    const profile = {
      name : "",
      lastname : "",
      phone : "",
      email : ""
    };
    this.setState({info: profile});
    this.setState({infoAdded: false});
    this.setState({formActive : false})
  }

  renderForm = (e) => {
    e.preventDefault();
    const {formActive} = this.state;
    this.setState({formActive : !formActive});
  }

  render() {
    const {name, lastname, phone, email} = this.state.info;
    const {formActive, infoAdded} = this.state;
    let formComponent;
    let formButton;
    let cleanButton;
    if(formActive) {
      formComponent = <GeneralForm 
        onSubmit={this.handleSubmit} 
        values={this.state.info}
        onRender={this.renderForm}
      />
    }else{
      formButton = (!infoAdded) ? (
        <div >
          <button onClick={this.renderForm} className="sectionButton" >Add Information</button>
       </div>
      ) : (
        <div>
          <button onClick={this.renderForm} className="sectionButton" >Edit Information</button>
       </div>
      )
    }

    if(infoAdded){
      cleanButton = <div>
          <button onClick={this.cleanInfo}>Clean</button>
      </div>
    }

    return (
      <div className="GeneralDiv">
        <div className="sectionTitleDiv">
          <h2>Personal Information</h2>
          {formButton}
          {cleanButton}
        </div>
        {formComponent}
        <p>Name: {name}</p>
        <p>Last Name:{lastname}</p>
        <p>Phone:{phone}</p>
        <p>Email: {email}</p>
      </div>
    )
  }
}


export default General;