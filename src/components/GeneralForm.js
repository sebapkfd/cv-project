import React from "react";

const GeneralForm = (props) => {

    const submitData = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    }

    const cancelSubmit = (e) => {
        e.preventDefault();
        props.onRender(e);
    }

    const values = props.values;
    return (
        <div className="formDiv">
        <form onSubmit={submitData} id="generalInfoForm">
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
            <button onClick={cancelSubmit}>
                Cancel
            </button>
            </div>
        </form>
        </div>
    )
}

export default GeneralForm;