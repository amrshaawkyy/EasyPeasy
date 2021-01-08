import React from "react";
import loginImg from "../Images/easypeasyLogo.png";
import "./Style.css";
import {withRouter} from "react-router-dom"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            fullName: '',
            email: '',
            password: '',
            phone: '',
            submitted: false,
            loading: false,
            error: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitted: true});
        const {userName, password, email} = this.state;

        // stop here if form is invalid
        if (!(userName && password && email)) {
            return;
        }

        this.setState({loading: true});

        fetch('/user/', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify({
                "userName": this.state.userName,
                "password": this.state.password,
                "email": this.state.email,
                "fullName": this.state.fullName,
                "phone": this.state.phone
            })
        }).then((Response) => {
            if (Response.statusText === 'Created' && Response.status === 201) {
                console.log(Response)
                return Response.json()
            }
            alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
            this.setState({loading: false})
            return null;
        }).then((result) => {
            localStorage.setItem('userId', result.id)
            this.props.history.push("/Home");
        }).catch(error => {
            console.log(error);
            alert("Check Inputs")
            this.setState({loading: false})
        })
    }

    render() {
        const {userName, password, fullName, phone, email, submitted, loading, error} = this.state;
        return (
            <div className="base-containers" ref={this.props.containerRef}>
                <div className="headers">Register</div>
                <div className="contents">
                    <div className="images">
                        <img src={loginImg} alt="Logo"/>
                    </div>
                    <form className="forms" onSubmit={this.handleSubmit}>
                        <div className="form-groups">
                            <label htmlFor="userName">UserName</label>
                            <input type="text" name="userName" placeholder="UserName" onChange={this.handleChange}/>
                            {submitted && !userName &&
                            <div className="help-block">UserName is required</div>
                            }
                        </div>
                        <div className="form-groups">
                            <label htmlFor="fullName">FullName</label>
                            <input type="text" name="fullName" placeholder="FullName" onChange={this.handleChange}/>
                            {submitted && !fullName &&
                            <div className="help-block">FullName is required</div>
                            }
                        </div>
                        <div className="form-groups">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
                            {submitted && !email &&
                            <div className="help-block">Email is required</div>
                            }
                        </div>
                        <div className="form-groups">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                            {submitted && !password &&
                            <div className="help-block">Password is required</div>
                            }
                        </div>
                        <div className="form-groups">
                            <label htmlFor="phone">Phone</label>
                            <input type="phone" name="phone" placeholder="Phone" onChange={this.handleChange}/>
                            {submitted && !phone &&
                            <div className="help-block">Phone is required</div>
                            }
                        </div>
                        <div className="footers">
                            <button className="btn btn-primary" disabled={loading}>Register</button>
                            {loading &&
                            <img alt="check"
                                 src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                            } {error &&
                        <div className={'alert alert-danger'}>{error}</div>
                        }
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Register)