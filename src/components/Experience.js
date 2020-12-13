import React, {Component} from "react";
import uniqid from "uniqid";
import ExperienceItem from "./ExperienceItem";
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
      companies: [],
      formActive : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitCompany = this.submitCompany.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.cleanExperience = this.cleanExperience.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState(prevState => {
      let company = Object.assign({}, prevState.company);
      company[name] = value;
      return { company };                                
    })
  }

  submitCompany = (e) =>{
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
      });
      this.renderForm(e);
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
    this.setState({ companies : companies});
  }

  cleanExperience = (e) => {
    e.preventDefault();
    this.setState({companies: []});
  }

  renderForm = (e) => {
    e.preventDefault();
    const {formActive} = this.state;
    this.setState({formActive : !formActive});
    this.resetForm();
  }

  render() {
    const {company, companies, formActive} = this.state;
    let formComponent;
    let formButton;
    let cleanButton;
    if(formActive) {
      formComponent = <ExperienceForm
        company={company}
        onSubmit={this.submitCompany}
        onChange={this.handleChange}
        onRender={this.renderForm}
      />
    }else{
      formButton = <div>
        <button onClick={this.renderForm} className="sectionButton" >Add Job</button>
      </div>
    }

    if(companies.length > 0) {
      cleanButton = <div>
        <button onClick={this.cleanExperience}>Clean</button>
      </div>
    }

    return (
      <div className="ExperienceDiv">
        <div className="sectionTitleDiv">
          <h2>Experience</h2>
          {formButton}
        </div>
        {formComponent}
        {cleanButton}
        
        <div>
          {companies.map((company) => {
              return (
                  <ExperienceItem 
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