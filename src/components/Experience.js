import React, {Component} from "react";
import uniqid from "uniqid";
import CompanyItem from "./CompanyItem";

class Experience extends Component{
  constructor() {
    super();
    this.state = {
      company: {
        companyName: " ",
        positionTitle: " ",
        mainTasks: " ",
        initialDate: " ",
        endDate: " ",
      },
      companies: []
    }
  }

  handleChange = (e) => {
    console.log(e);
    const {name, value} = e.target;
    this.setState(prevState => {
      let company = Object.assign({}, prevState.company);
      company[name] = value;
      return { company };                                
    })
  }

  onSubmitTask = (e) =>{
    e.preventDefault();
    this.setState({
      companies: [...this.state.companies, this.state.company]
    })

    this.resetForm();
  }

  resetForm = () => {
    this.setState((prevState) => {
      let company = Object.assign({}, prevState.company);
      company["companyName"] = " ";
      company["positionTitle"] = " ";
      company["mainTasks"] = " ";
      company["initialDate"] = " ";
      company["endDate"] = " ";
      return { company };                       
    })
  }

  render() {
    const {company, companies} = this.state;

    return (
      <div>
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
              <label>Enter Desciption</label>
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
                type="text"
                name="initialDate" //
              />
              <br/>
              <label>Enter Final Date</label>
              <input
                onChange={this.handleChange}
                value={company.endDate} 
                type="text"
                name="endDate" //
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
                  />
              )
          })}
        </div>
      </div>
    )
  }
}


export default Experience;