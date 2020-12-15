import React, {useState} from "react";
import uniqid from "uniqid";
import SkillItem from "./SkillItem";
import SkillForm from "./SkillForm";

const Skills = () => {
    const [skill, setSkill] = useState({ id: uniqid(), skillName: ""})
    const [skills, setSkills] = useState([]);
    const [formActive, setFormActive] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSkill({...skill, [name]: value})

    }

    const submitSkill = (e) => {
        e.preventDefault();
        let isValid = true;
        for (let key in skill){
            if(skill[key] ==="") {
                isValid = false;
            }
        }
        if(isValid) {
            setSkills([...skills, skill]);
            renderForm(e);
        }
    }

    const resetForm = (e) => {
        setSkill({ id: uniqid(), skillName: ""});
    }

    const handleDelete = (itemId) =>{
        const filteredSkills = skills.filter(skill => skill.id !== itemId)
        setSkills(filteredSkills);
    }

    const cleanSkills = (e) =>{
        e.preventDefault();
        setSkills([]);
    }

    const renderForm = (e) =>{
        e.preventDefault();
        setFormActive(!formActive);
        resetForm();
    }

    let formComponent;
    let formButton;
    let cleanButton;
    if(formActive) {
    formComponent = <SkillForm
            skill={skill}
            onSubmit={submitSkill}
            onChange={handleChange}
            onRender={renderForm}
        />
    }else{
    formButton = <div >
        <button onClick={renderForm} className="sectionButton" >Add Skill</button>
    </div>
    }

    if(skills.length > 0){
        cleanButton = <div>
            <button onClick={cleanSkills}>Clean</button>
        </div>
    }

    return (
        <div className="SkillsDiv">
            <div className="sectionTitleDiv">
                <h2>Skills</h2>
                {formButton}
                {cleanButton}
            </div>
            {formComponent}
            <div>
                {skills.map((skill) => {
                    return (
                        <SkillItem
                            key={skill.id}
                            skill={skill}
                            onDelete={handleDelete}
                        />
                    )
                })}
            </div>
        </div>
    )

}

export default Skills;