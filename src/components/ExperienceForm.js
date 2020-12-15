import React from "react";

const ExperienceForm = (props) => {

    const changeData = (e) =>{
        e.preventDefault();
        props.onChange(e);
    }

    const submitData = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    }

    const cancelSubmit = (e) =>{
        e.preventDefault();
        props.onRender(e);
    }

    const {company} = props;
    return (
        <div className="formDiv">
            <form onSubmit={submitData}>
                <div className="form-group">
                <label htmlFor="experienceInput">Company Name</label>
                <br></br>
                <input
                    onChange={changeData}
                    value={company.companyName}
                    type="text"
                    name="companyName"
                />
                <br></br>
                <label>Position title</label>
                <br></br>
                <input
                    onChange={changeData}
                    value={company.positionTitle}
                    type="text"
                    name="positionTitle"
                />
                <br></br>
                <label>Description</label>
                <br></br>
                <input
                    onChange={changeData}
                    value={company.mainTasks}
                    type="text"
                    name="mainTasks"
                />
                <br></br>
                <label>Initial Date</label>
                <br></br>
                <input
                    onChange={changeData}
                    value={company.initialDate}
                    type="date"
                    name="initialDate"
                />
                <br></br>
                <label>Final Date</label>
                <br></br>
                <input
                    onChange={changeData}
                    value={company.endDate}
                    type="date"
                    name="endDate"
                />
                </div>
                <div className="buttonsDiv">
                    <button type="submit" >
                        Add Company
                    </button>
                    <button onClick={cancelSubmit}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ExperienceForm;
