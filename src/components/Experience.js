import React, {Component} from "react";
import uniqid from "uniqid";
import CompanyItem from "./CompanyItem";

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
        <div className="formDiv">
          <form onSubmit={this.onSubmitTask}>
            <div className="form-group">
              <label htmlFor="experienceInput">Enter Company Name</label>
              <input
                onChange={this.handleChange}
                value={company.companyName}
                type="text"
                name="companyName"
              />
              <br/>
              <label>Enter Position title</label>
              <input
                onChange={this.handleChange}
                value={company.positionTitle}
                type="text"
                name="positionTitle"
              />
              <br/>
              <label>Enter Description</label>
              <input
                onChange={this.handleChange}
                value={company.mainTasks}
                type="text"
                name="mainTasks"
              />
              <br/>
              <label>Enter Initial Date</label>
              <input
                onChange={this.handleChange}
                value={company.initialDate}
                type="date"
                name="initialDate"
              />
              <br/>
              <label>Enter Final Date</label>
              <input
                onChange={this.handleChange}
                value={company.endDate}
                type="date"
                name="endDate"
              />
            </div>
            <div className="form-group">
              <button type="submit" >
                Add Company
              </button>
            </div>
          </form>
        </div>
        <div key={uniqid()}>
          {companies.map((company) => {
              return (
                  <CompanyItem 
                    companyName={company.companyName}
                    positionTitle={company.positionTitle}
                    mainTasks={company.mainTasks}
                    initialDate={company.initialDate}
                    endDate={company.endDate}
                    key={uniqid()}
                    id={company.id}
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