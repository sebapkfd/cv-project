import React, {Component} from "react";

class GeneralForm extends Component{

  submitData = (e) => {
      e.preventDefault();
      this.props.onSubmit(e);
  }

  cancelSubmit = (e) => {
    e.preventDefault();
    this.props.onRender(e);
  }

  render() {
    const values = this.props.values;
      return (
          <div className="formDiv">
            <form onSubmit={this.submitData} id="generalInfoForm">
              <div className="form-group">
                <label htmlFor="generalInput">Enter Name</label>
                <input type="text" name="name" defaultValue={values.name}/>
                <br/>
                <label>Enter Career</label>
                <input type="text" name="lastname" defaultValue={values.lastname}/>
                <br/>
                <label>Enter Phone</label>
                <input type="text" name="phone" defaultValue={values.phone}/>
                <br/>
                <label>Enter Email</label>
                <input type="text" name="email" defaultValue={values.email}/>
              </div>
              <div className="form-group">
                <button type="submit" >
                  Submit
                </button>
              </div>
              <div className="form-group">
                <button onClick={this.cancelSubmit}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
      )
  }
}

export default GeneralForm;