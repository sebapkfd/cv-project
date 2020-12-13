import React, {Component} from "react";

class SkillForm extends Component{

    changeData = (e) => {
        e.preventDefault();
        this.props.onChange(e);
    }

    submitData = (e) =>{
        e.preventDefault();
        this.props.onSubmit(e);
    }
    
    cancelSubmit = (e) => {
        e.preventDefault();
        this.props.onRender(e);
    }

    render() {
        const {skill} = this.props;

        return (
            <div className="formDiv">
                <form onSubmit={this.submitData}>
                    <div className="form-group">
                        <label htmlFor="skillInput">Enter Skill</label>
                        <br></br>
                        <input
                            onChange={this.changeData}
                            value={skill.skillName}
                            type="text"
                            name="skillName"
                        />
                    </div>
                    <div className="buttonsDiv">
                        <button type="submit" >
                            Add Skill
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

export default SkillForm;