import React from "react";


const SkillForm = (props) => {
    const changeData = (e) => {
        e.preventDefault();
        props.onChange(e);
    }

    const submitData = (e) =>{
        e.preventDefault();
        props.onSubmit(e);
    }
    
    const cancelSubmit = (e) => {
        e.preventDefault();
        props.onRender(e);
    }

    const {skill} = props;

    return (
        <div className="formDiv">
            <form onSubmit={submitData}>
                <div className="form-group">
                    <label htmlFor="skillInput">Enter Skill</label>
                    <br></br>
                    <input
                        onChange={changeData}
                        value={skill.skillName}
                        type="text"
                        name="skillName"
                    />
                </div>
                <div className="buttonsDiv">
                    <button type="submit" >
                        Add Skill
                    </button>
                    <button onClick={cancelSubmit}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}


export default SkillForm;