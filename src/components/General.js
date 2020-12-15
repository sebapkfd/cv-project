import React, {useState} from "react";
import GeneralForm from "./GeneralForm"

const General = () => {
    const [info, setInfo] = useState({
        name: "",
        lastname: "",
        phone: "",
        email: ""
    });
    const [formActive, setFormActive] = useState(false);
    const [infoAdded, setInfoAdded] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const profile = {
            name : e.target.name.value,
            lastname : e.target.lastname.value,
            phone : e.target.phone.value,
            email : e.target.email.value
        };
        let isValid = true;
        for (let key in profile){
            if(profile[key] === ""){
                isValid = false;
            }
        }
        if(isValid){
            setInfo(profile);
            setInfoAdded(true);
            renderForm(e);
        }
    }

    const cleanInfo = (e) => {
        e.preventDefault();
        setInfo({
            name : "",
            lastname : "",
            phone : "",
            email : ""
        })
        setInfoAdded(false);
        setFormActive(false);
    }

    const renderForm = (e) => {
        e.preventDefault();
        setFormActive(!formActive);
    }

    const {name, lastname, phone, email} = info;
    let formComponent;
    let formButton;
    let cleanButton;
    if(formActive) {
        formComponent = <GeneralForm 
            onSubmit={handleSubmit} 
            values={info}
            onRender={renderForm}
    />
    } else {
        formButton = (!infoAdded) ? (
            <div >
                <button onClick={renderForm} className="sectionButton" >Add Information</button>
            </div>
        ) : (
            <div>
                <button onClick={renderForm} className="sectionButton" >Edit Information</button>
            </div>
        )
    }

    if(infoAdded){
        cleanButton = <div>
            <button onClick={cleanInfo}>Clean</button>
        </div>
    }

    return (
        <div className="GeneralDiv">
            <div className="sectionTitleDiv">
                <h2>Personal Information</h2>
                {formButton}
                {cleanButton}
            </div>
            {formComponent}
            <p>Name: {name}</p>
            <p>Last Name:{lastname}</p>
            <p>Phone:{phone}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default General;