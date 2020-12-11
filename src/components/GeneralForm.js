import React, {Component} from "react";

class GeneralForm extends Component{

    submitData = (e) => {
        e.preventDefault();
        this.props.onSubmit(e);
    }

    render() {
        return (
            <div className="formDiv">
              <form onSubmit={this.submitData} id="generalInfoForm">
                <div className="form-group">
                  <label htmlFor="generalInput">Enter Name</label>
                  <input type="text" name="name"/>
                  <br/>
                  <label>Enter Career</label>
                  <input type="text" name="lastname"/>
                  <br/>
                  <label>Enter Phone</label>
                  <input type="text" name="phone"/>
                  <br/>
                  <label>Enter Email</label>
                  <input type="text" name="email"/>
                </div>
                <div className="form-group">
                  <button type="submit" >
                    Submit
                  </button>
                </div>
              </form>
            </div>
        )
    }
}

export default GeneralForm;