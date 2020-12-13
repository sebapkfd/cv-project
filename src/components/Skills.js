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
            skills: []
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState(prevState => {
            let skill = Object.assign({}, prevState.skill);
            skill[name] = value;
            return {skill};
        })
    }

    onSubmitTask = (e) =>{
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
            })
            this.resetForm();
        }
    }

    resetForm = () => {
        this.setState((prevState) => {
            let skill = Object.assign({}, prevState.skill);
            skill["id"] = uniqid();
            skill["skillName"] = "";
            return { skill};
        })
    }

    handleDelete = (itemId) => {
        const skills = this.state.skills.filter( skill => skill.id !== itemId);
        this.setState({skills : skills});
    }

    cleanSkills = (e) => {
        e.preventDefault();
        this.setState({skills: []})
    }
    
    render() {
        const {skill, skills} = this.state;
        return (
            <div className="SkillsDiv">
                <SkillForm
                    skill={skill}
                    onSubmit={this.onSubmitTask}
                    onChange={this.handleChange}
                />
                <div>
                    <button onClick={this.cleanSkills}>
                        Clean
                    </button>
                </div>
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