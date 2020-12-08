const Education = (props) =>{
    const {schoolName, careerTitle, initialDate, endDate} = props;

    return (
        <div className="educationDiv">
            <h2>Educational information</h2>
            <p>{schoolName}</p>
            <p>{careerTitle}</p>
            <p>{initialDate}</p>
            <p>{endDate}</p>
        </div>
    )
}

export default Education;