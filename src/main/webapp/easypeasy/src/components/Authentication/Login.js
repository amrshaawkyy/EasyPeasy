import React from "react";
import loginImg from "../Images/easypeasyLogo.png";
import {withRouter} from "react-router-dom"
import "./Style.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        //  debugger;
        event.preventDefault();
        // console.log(this.props.history);
        this.setState({submitted: true});
        const {userName, password} = this.state;

        // stop here if form is invalid
        if (!(userName && password)) {
            return;
        }

        this.setState({loading: true});
        fetch('/user/login/', {
            method: 'post',
            headers: {
                "Access-Control-Allow-Headers": "*",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: this.state.userName,
                password: this.state.password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                // console.log(result);
                if (result.statusText === 'Unauthorized' && result.status === 401) {
                    alert('Invalid User');
                } else {
                    localStorage.setItem('userId', result.id)
                    this.props.history.push('/Home');
                    window.location.reload(true);
                }
            }).catch(error => {
            console.log(error);
            alert("Wrong UserName or Password")
            this.setState({loading: false})
        })
        this.setState({loading: false})
    }

    render() {
        const {userName, password, submitted, loading, error} = this.state;
        return (
            <div className="base-containers" ref={this.props.containerRef}>
                <div className="headers">Login</div>
                <div className="contents">
                    <div className="images">
                        <img src={loginImg} alt="Logo"/>
                    </div>
                    <form className="forms" onSubmit={this.handleSubmit}>
                        <div className={'form-groups' + (submitted && !userName ? ' has-error' : '')}>
                            <label htmlFor="userName">UserName</label>
                            <input type="text" name="userName" value={userName} placeholder="UserName"
                                   onChange={this.handleChange}/>
                            {submitted && !userName &&
                            <div className="help-block">UserName is required</div>
                            }
                        </div>
                        <div className={'form-groups' + (submitted && !password ? ' has-error' : '')}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} placeholder="Password"
                                   onChange={this.handleChange}/>
                            {submitted && !password &&
                            <div className="help-block">Password is required</div>
                            }
                        </div>
                        <div className="footers">
                            <button className="btn btn-primary" disabled={loading}>Login</button>
                            {loading &&
                            <img alt="Check"
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

export default withRouter(Login)