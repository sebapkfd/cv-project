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
                <label htmlFor="generalInput">Name</label>
                <br></br>
                <input type="text" name="name" defaultValue={values.name}/>
                <br></br>
                <label>Career</label>
                <br></br>
                <input type="text" name="lastname" defaultValue={values.lastname}/>
                <br></br>
                <label>Phone</label>
                <br></br>
                <input type="text" name="phone" defaultValue={values.phone}/>
                <br></br>
                <label>Email</label>
                <br></br>
                <input type="text" name="email" defaultValue={values.email}/>
              </div>
              <div className="buttonsDiv">
                <button type="submit" >
                  Submit
                </button>
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