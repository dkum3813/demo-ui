import './SignIn.css'
import React from 'react'
import RoutePath from "../../constants/RoutePath";


class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberMe: false,
            user: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        if (this.state.password === 'pw') {
            const user = {
                email: this.state.email
            };
            localStorage.setItem("authenticatedUser", JSON.stringify(user));
        }
        event.stopPropagation();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        if (this.state.password === 'pw') {
            const user = {
                email: this.state.email
            };
            localStorage.setItem("authenticatedUser", JSON.stringify(user));
        }
    }

    render() {
        return (
            <form className="form-signin">
                <div className="text-center mb-4">
                    <img
                        className="mb-4"
                        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                        alt=""
                        width="72"
                        height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Dummy Booking System</h1>
                    <p>
                    </p>
                </div>

                <div className="form-label-group">
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                        autoFocus/>
                    <label htmlFor="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required/>
                    <label htmlFor="inputPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input
                            name="rememberMe"
                            type="checkbox"
                            value={this.state.rememberMe}
                            onChange={this.handleChange}/> Remember me
                    </label>
                </div>
                <a className="btn btn-lg btn-primary btn-block" href={RoutePath.dashboard}>Sign in</a>
                <p className="mt-5 mb-3 text-muted text-center">&copy; DBS 2022</p>
            </form>
        );

    }
}

export default SignIn;
