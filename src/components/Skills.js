import React, {Component} from "react";
import uniqid from "uniqid";
import SkillItem from "./SkillItem";
import SkillForm from "./SkillForm";

class Skills extends Component{
    constructor() {
        super();
        this.state = {
            skill : {
                id: uniqid(),
                skillName: ""
            },
            skills: [],
            formActive: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitSkill = this.submitSkill.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.cleanSkills = this.cleanSkills.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState(prevState => {
            let skill = Object.assign({}, prevState.skill);
            skill[name] = value;
            return {skill};
        });
    }

    submitSkill = (e) =>{
        e.preventDefault();
        const {skill} = this.state;
        let isValid = true;
        for (let key in skill){
            if(skill[key] === "") {
                isValid = false;
            }
        }
        if(isValid){
            this.setState({
                skills: [...this.state.skills, this.state.skill]
            });
            this.renderForm(e);
        }
    }

    resetForm = () => {
        this.setState((prevState) => {
            let skill = Object.assign({}, prevState.skill);
            skill["id"] = uniqid();
            skill["skillName"] = "";
            return { skill};
        });
    }

    handleDelete = (itemId) => {
        const skills = this.state.skills.filter( skill => skill.id !== itemId);
        this.setState({skills : skills});
    }

    cleanSkills = (e) => {
        e.preventDefault();
        this.setState({skills: []});
    }

    renderForm = (e) => {
        e.preventDefault();
        const {formActive} = this.state;
        this.setState({formActive : !formActive});
        this.resetForm();
    }
    
    render() {
        const {skill, skills, formActive} = this.state;
        let formComponent;
        let formButton;
        let cleanButton;
        if(formActive) {
        formComponent = <SkillForm
                skill={skill}
                onSubmit={this.submitSkill}
                onChange={this.handleChange}
                onRender={this.renderForm}
            />
        }else{
        formButton = <div>
            <button onClick={this.renderForm}>Add Skill</button>
        </div>
        }

        if(skills.length > 0){
            cleanButton = <div>
              <button onClick={this.cleanSkills}>Clean</button>
            </div>
        }

        return (
            <div className="SkillsDiv">
                <h2>Skills</h2>
                {formButton}
                {formComponent}
                {cleanButton}
                <div>
                    {skills.map((skill) => {
                        return (
                            <SkillItem
                                key={skill.id}
                                skill={skill}
                                onDelete={this.handleDelete}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Skills;