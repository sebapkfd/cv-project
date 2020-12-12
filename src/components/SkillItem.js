import React from "react";

const SkillItem = (props) => {
    const {skillName, id} = props.skill;
    return (
        <div className="skillItemDiv">
            <p>{skillName}</p>
            <button onClick={() => props.onDelete(id)}>
                Delete
            </button>
        </div>
    )
}

export default SkillItem;