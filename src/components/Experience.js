import React, {Component} from "react";
import uniqid from "uniqid";
import CompanyItem from "./CompanyItem";
import ExperienceForm from "./ExperienceForm";

class Experience extends Component{
  constructor() {
    super();
    this.state = {
      company: {
        id: uniqid(),
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        initialDate: "",
        endDate: "",
      },
      companies: []
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState(prevState => {
      let company = Object.assign({}, prevState.company);
      company[name] = value;
      return { company };                                
    })
  }

  onSubmitTask = (e) =>{
    e.preventDefault();
    const {company}  = this.state;
    let isValid = true;
    for (let key in company){
      if (company[key] === "") {
      isValid = false;
      }
    }
    if(isValid){
      this.setState({
        companies: [...this.state.companies, this.state.company]
      })
      this.resetForm();
    }
  }

  resetForm = () => {
    this.setState((prevState) => {
      let company = Object.assign({}, prevState.company);
      company["id"] = uniqid();
      company["companyName"] = "";
      company["positionTitle"] = "";
      company["mainTasks"] = "";
      company["initialDate"] = "";
      company["endDate"] = "";
      return { company };                       
    })
  }

  handleDelete = (itemId) => {
    const companies = this.state.companies.filter( company => company.id !== itemId);
    this.setState({ companies : companies})
  }

  render() {
    const {company, companies} = this.state;

    return (
      <div className="ExperienceDiv">
        <ExperienceForm
          company={company}
          onSubmit={this.onSubmitTask}
          onChange={this.handleChange}
        />
        <div>
          {companies.map((company) => {
              return (
                  <CompanyItem 
                    key={company.id}
                    company={company}
                    onDelete={this.handleDelete}
                  />
              )
          })}
        </div>
      </div>
    )
  }
}


export default Experience;