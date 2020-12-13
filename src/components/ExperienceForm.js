import React, {Component} from "react";

class ExperienceForm extends Component{

    changeData = (e) =>{
        e.preventDefault();
        this.props.onChange(e);
    }

    submitData = (e) => {
        e.preventDefault();
        this.props.onSubmit(e);
    }

    cancelSubmit = (e) =>{
        e.preventDefault();
        this.props.onRender(e);
    }

    render() {
        const {company} = this.props;
        return (
            <div className="formDiv">
                <form onSubmit={this.submitData}>
                    <div className="form-group">
                    <label htmlFor="experienceInput">Company Name</label>
                    <br></br>
                    <input
                        onChange={this.changeData}
                        value={company.companyName}
                        type="text"
                        name="companyName"
                    />
                    <br></br>
                    <label>Position title</label>
                    <br></br>
                    <input
                        onChange={this.changeData}
                        value={company.positionTitle}
                        type="text"
                        name="positionTitle"
                    />
                    <br></br>
                    <label>Description</label>
                    <br></br>
                    <input
                        onChange={this.changeData}
                        value={company.mainTasks}
                        type="text"
                        name="mainTasks"
                    />
                    <br></br>
                    <label>Initial Date</label>
                    <br></br>
                    <input
                        onChange={this.changeData}
                        value={company.initialDate}
                        type="date"
                        name="initialDate"
                    />
                    <br></br>
                    <label>Final Date</label>
                    <br></br>
                    <input
                        onChange={this.changeData}
                        value={company.endDate}
                        type="date"
                        name="endDate"
                    />
                    </div>
                    <div className="buttonsDiv">
                        <button type="submit" >
                            Add Company
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

export default ExperienceForm;
