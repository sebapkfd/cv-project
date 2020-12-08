const Experience = (props) =>{
    const {companyName, positionTitle, mainTasks, initialDate, endDate} = props;

    return (
        <div className="experienceDiv">
            <h2>Experience information</h2>
            <p>{companyName}</p>
            <p>{positionTitle}</p>
            <p>{mainTasks}</p>
            <p>{initialDate}</p>
            <p>{endDate}</p>
        </div>
    )
}

export default Experience;