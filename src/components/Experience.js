import React, {useState} from "react";
import uniqid from "uniqid";
import ExperienceItem from "./ExperienceItem";
import ExperienceForm from "./ExperienceForm";

const Experience = () => {
    const [company, setCompany] = useState({
        id: uniqid(),
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        initialDate: "",
        endDate: ""
    });
    const [companies, setCompanies] = useState([]);
    const [formActive, setFormActive] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCompany({...company, [name]: value});
    }

    const submitCompany = (e) =>{
        e.preventDefault();
        let isValid = true;
        for (let key in company){
            if (company[key] === "") {
                isValid = false;
            }
        }
        if(isValid){
            setCompanies([...companies, company]);
            renderForm(e);
        }
    }

    const resetForm = () => {
        setCompany({
            id: uniqid(),
            companyName: "",
            positionTitle: "",
            mainTasks: "",
            initialDate: "",
            endDate: ""
        });
    }

    const handleDelete = (itemId) => {
        const filteredCompanies = companies.filter( company => company.id !== itemId);
        setCompanies(filteredCompanies);
    }

    const cleanExperience = (e) => {
        e.preventDefault();
        setCompanies([]);
    }

    const renderForm = (e) => {
        e.preventDefault();
        setFormActive(!formActive);
        resetForm();
    }

    let formComponent;
    let formButton;
    let cleanButton;
    if(formActive) {
      formComponent = <ExperienceForm
        company={company}
        onSubmit={submitCompany}
        onChange={handleChange}
        onRender={renderForm}
      />
    }else{
      formButton = <div>
        <button onClick={renderForm} className="sectionButton" >Add Job</button>
      </div>
    }

    if(companies.length > 0) {
      cleanButton = <div>
        <button onClick={cleanExperience}>Clean</button>
      </div>
    }

    return (
      <div className="ExperienceDiv">
        <div className="sectionTitleDiv">
          <h2>Experience</h2>
          {formButton}
          {cleanButton}
        </div>
        {formComponent}
        
        <div>
          {companies.map((company) => {
              return (
                  <ExperienceItem 
                    key={company.id}
                    company={company}
                    onDelete={handleDelete}
                  />
              )
          })}
        </div>
      </div>
    )
}


// class Experience extends Component{
//   constructor() {
//     super();
//     state = {
//       company: {
//         id: uniqid(),
//         companyName: "",
//         positionTitle: "",
//         mainTasks: "",
//         initialDate: "",
//         endDate: "",
//       },
//       companies: [],
//       formActive : false
//     };
//     handleChange = handleChange.bind(;
//     submitCompany = submitCompany.bind(;
//     handleDelete = handleDelete.bind(;
//     cleanExperience = cleanExperience.bind(;
//     renderForm = renderForm.bind(;
//   }

//   handleChange = (e) => {
//     const {name, value} = e.target;
//     setState(prevState => {
//       let company = Object.assign({}, prevState.company);
//       company[name] = value;
//       return { company };                                
//     })
//   }

//   submitCompany = (e) =>{
//     e.preventDefault();
//     const {company}  = state;
//     let isValid = true;
//     for (let key in company){
//       if (company[key] === "") {
//       isValid = false;
//       }
//     }
//     if(isValid){
//       setState({
//         companies: [...state.companies, state.company]
//       });
//       renderForm(e);
//     }
//   }

//   resetForm = () => {
//     setState((prevState) => {
//       let company = Object.assign({}, prevState.company);
//       company["id"] = uniqid();
//       company["companyName"] = "";
//       company["positionTitle"] = "";
//       company["mainTasks"] = "";
//       company["initialDate"] = "";
//       company["endDate"] = "";
//       return { company };                       
//     })
//   }

//   handleDelete = (itemId) => {
//     const companies = state.companies.filter( company => company.id !== itemId);
//     setState({ companies : companies});
//   }

//   cleanExperience = (e) => {
//     e.preventDefault();
//     setState({companies: []});
//   }

//   renderForm = (e) => {
//     e.preventDefault();
//     const {formActive} = state;
//     setState({formActive : !formActive});
//     resetForm();
//   }

//   render() {
//     const {company, companies, formActive} = state;
//     let formComponent;
//     let formButton;
//     let cleanButton;
//     if(formActive) {
//       formComponent = <ExperienceForm
//         company={company}
//         onSubmit={submitCompany}
//         onChange={handleChange}
//         onRender={renderForm}
//       />
//     }else{
//       formButton = <div>
//         <button onClick={renderForm} className="sectionButton" >Add Job</button>
//       </div>
//     }

//     if(companies.length > 0) {
//       cleanButton = <div>
//         <button onClick={cleanExperience}>Clean</button>
//       </div>
//     }

//     return (
//       <div className="ExperienceDiv">
//         <div className="sectionTitleDiv">
//           <h2>Experience</h2>
//           {formButton}
//           {cleanButton}
//         </div>
//         {formComponent}
        
//         <div>
//           {companies.map((company) => {
//               return (
//                   <ExperienceItem 
//                     key={company.id}
//                     company={company}
//                     onDelete={handleDelete}
//                   />
//               )
//           })}
//         </div>
//       </div>
//     )
//   }
// }


export default Experience;