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
                    <label htmlFor="experienceInput">Enter Company Name</label>
                    <input
                        onChange={this.changeData}
                        value={company.companyName}
                        type="text"
                        name="companyName"
                    />
                    <br/>
                    <label>Enter Position title</label>
                    <input
                        onChange={this.changeData}
                        value={company.positionTitle}
                        type="text"
                        name="positionTitle"
                    />
                    <br/>
                    <label>Enter Description</label>
                    <input
                        onChange={this.changeData}
                        value={company.mainTasks}
                        type="text"
                        name="mainTasks"
                    />
                    <br/>
                    <label>Enter Initial Date</label>
                    <input
                        onChange={this.changeData}
                        value={company.initialDate}
                        type="date"
                        name="initialDate"
                    />
                    <br/>
                    <label>Enter Final Date</label>
                    <input
                        onChange={this.changeData}
                        value={company.endDate}
                        type="date"
                        name="endDate"
                    />
                    </div>
                    <div className="form-group">
                    <button type="submit" >
                        Add Company
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

export default ExperienceForm;
