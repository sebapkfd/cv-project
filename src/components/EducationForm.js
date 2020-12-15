import React from "react";

const EducationForm = (props) => {
    const changeData = (e) =>{
        e.preventDefault();
        props.onChange(e);
    }

    const submitData = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    }

    const cancelSubmit = (e) => {
        e.preventDefault();
        props.onRender(e);
    }

    const {school} = props;

    return (
        <div className="formDiv">
            <form onSubmit={submitData}>
                <div className="form-group">
                    <label htmlFor="schoolInput">Enter School</label>
                    <br></br>
                    <input
                        onChange={changeData}
                        value={school.schoolName}
                        type="text"
                        name="schoolName"
                    />
                    <br></br>
                    <label>Enter Career</label>
                    <br></br>
                    <input
                        onChange={changeData}
                        value={school.careerTitle}
                        type="text"
                        name="careerTitle"
                    />
                    <br></br>
                    <label>Enter Initial Date</label>
                    <br></br>
                    <input
                        onChange={changeData}
                        value={school.initialDate}
                        type="date"
                        name="initialDate"
                    />
                    <br></br>
                    <label>Enter Final Date</label>
                    <br></br>
                    <input
                        onChange={changeData}
                        value={school.endDate}
                        type="date"
                        name="endDate"
                    />
                </div>
                <div className="buttonsDiv">
                    <button type="submit" >
                        Add School
                    </button>
                    <button onClick={cancelSubmit}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EducationForm;