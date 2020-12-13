import React, {Component} from "react";
import GeneralForm from "./GeneralForm"

class General extends Component{
  constructor() {
    super();
    this.state = {
      name: "",
      lastname: "",
      phone: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cleanInfo = this.cleanInfo.bind(this);
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
      this.setState(profile);
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
    this.setState(profile);
  }
  
  render() {
    const {name, lastname, phone, email} = this.state;
    return (
      <div className="GeneralDiv">
        <GeneralForm onSubmit={this.handleSubmit} values={this.state}/>
        <div>
          <button onClick={this.cleanInfo}>
            Clean
          </button>
        </div>
        <div>
          <button>
            Edit
          </button>
        </div>
        <p>Name: {name}</p>
        <p>Last Name:{lastname}</p>
        <p>Phone:{phone}</p>
        <p>Email: {email}</p>
      </div>
    )
  }
}


export default General;