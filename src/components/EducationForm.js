import React, {Component} from "react";

class EducationForm extends Component{
    constructor() {
        super();
    }

    changeData = (e) =>{
        e.preventDefault();
        this.props.onChange(e);
    }

    submitData = (e) => {
        e.preventDefault();
        this.props.onSubmit(e);
    }

    render() {
        return (
            <div className="formDiv">
          <form onSubmit={this.submitData}>
            <div className="form-group">
              <label htmlFor="schoolInput">Enter School</label>
              <input
                onChange={this.changeData}
                value={this.props.school.schoolName}
                type="text"
                name="schoolName"
              />
              <br/>
              <label>Enter Career</label>
              <input
                onChange={this.changeData}
                value={this.props.school.careerTitle}
                type="text"
                name="careerTitle"
              />
              <br/>
              <label>Enter Initial Date</label>
              <input
                onChange={this.changeData}
                value={this.props.school.initialDate}
                type="date"
                name="initialDate"
              />
              <br/>
              <label>Enter Final Date</label>
              <input
                onChange={this.changeData}
                value={this.props.school.endDate}
                type="date"
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
        )
    }
}

export default EducationForm;