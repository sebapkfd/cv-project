const General = (props) =>{
    const { name, lastname, phone, email} = props;

    return (
        <div className = "generalDiv">
            <h2>General information</h2>
            <p>{name}</p>
            <p>{lastname}</p>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    )
}

export default General;