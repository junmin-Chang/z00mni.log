import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import classnames from 'classnames';
import "./style/Login.css"

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/");
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);

    };

    render() {
      
        return (
            <div className="container-login">
                <form noValidate onSubmit={this.onSubmit}>
                    <input placeholder="이메일" className="input-login" type="email" value={this.state.email} name="email" onChange={this.onChange}/>

                    <input placeholder="비밀번호" className="input-login" type="password" value={this.state.password} name="password" onChange={this.onChange}/>
                    <button className="button-login" type="submit">로그인</button>
                </form>
            </div>
        )
    }
}

LoginPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(LoginPage);

