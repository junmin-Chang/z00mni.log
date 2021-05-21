import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import classnames from 'classnames';

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
        const {errors} = this.state;
        return (
            <div className="container">
                <form noValidate onSubmit={this.onSubmit}>
                    <input type="email" value={this.state.email} name="email" error={errors.email} onChange={this.onChange} className={classnames("", {
                        invalid: errors.email || errors.emailnotfound
                    })}/>

                    <input type="password" value={this.state.password} name="password" error={errors.password} onChange={this.onChange} className={classnames("", {
                        invalid: errors.password || errors.passwordincorrect
                    })}/>
                    <button type="submit">로그인</button>
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

