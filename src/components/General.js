import React, {Component} from 'react';

class General extends Component{
    constructor() {
        super();
        this.state = {
            name: " ",
            lastname: " ",
            phone: " ",
            email: " "
        }
        
    }

    handleChange = (e) => {
        console.log(e);
        const {name, value} = e.target;
        this.setState({[name] : value})
    };

    handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
    }

    render() {
        const {name, lastname, phone, email} = this.state;
        return (
            <div className="GeneralDiv">
                <div className="formDiv">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="generalInput">Enter Name</label>
                            <input
                                onChange={this.handleChange}
                                value={name}
                                type="text"
                                name="name"
                            />
                            <br/>
                            <label>Enter Career</label>
                            <input
                                onChange={this.handleChange}
                                value={lastname}
                                type="text"
                                name="lastname"
                            />
                            <br/>
                            <label>Enter Phone</label>
                            <input
                                onChange={this.handleChange}
                                value={phone}
                                type="text"
                                name="phone"
                            />
                            <br/>
                            <label>Enter Email</label>
                            <input
                                onChange={this.handleChange}
                                value={email}
                                type="text"
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <button>
                        Edit
                    </button>
                </div>
                <p>Name: {name}</p>
                <p>Last Name:{lastname}</p>
                <p>Phone:{phone}</p>
                <p>Email: {email}</p>
            </div>
        )
    }

}


export default General;