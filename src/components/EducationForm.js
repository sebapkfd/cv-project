import React, {Component} from "react";

class EducationForm extends Component{

    changeData = (e) =>{
        e.preventDefault();
        this.props.onChange(e);
    }

    submitData = (e) => {
        e.preventDefault();
        this.props.onSubmit(e);
    }

    cancelSubmit = (e) => {
        e.preventDefault();
        this.props.onRender(e);
    }

    render() {
        const {school} = this.props;

        return (
            <div className="formDiv">
                <form onSubmit={this.submitData}>
                    <div className="form-group">
                        <label htmlFor="schoolInput">Enter School</label>
                        <br></br>
                        <input
                            onChange={this.changeData}
                            value={school.schoolName}
                            type="text"
                            name="schoolName"
                        />
                        <br></br>
                        <label>Enter Career</label>
                        <br></br>
                        <input
                            onChange={this.changeData}
                            value={school.careerTitle}
                            type="text"
                            name="careerTitle"
                        />
                        <br></br>
                        <label>Enter Initial Date</label>
                        <br></br>
                        <input
                            onChange={this.changeData}
                            value={school.initialDate}
                            type="date"
                            name="initialDate"
                        />
                        <br></br>
                        <label>Enter Final Date</label>
                        <br></br>
                        <input
                            onChange={this.changeData}
                            value={school.endDate}
                            type="date"
                            name="endDate"
                        />
                    </div>
                    <div className="buttonsDiv">
                        <button type="submit" >
                            Add School
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

export default EducationForm;