import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import classnames from 'classnames';

class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.registerUser(newUser, this.props.history);

    }
    render() {
        const { errors } = this.state;
        return (

            <div className="container">
                <form onSubmit={this.onSubmit} noValidate>
                    <input error={errors.name} type="text" name="name" value={this.state.name} onChange={this.onChange}
                    className={classnames("", {
                        invalid: errors.name
                    })}/>
                    <input error={errors.email} type="email" name="email" value={this.state.email} onChange={this.onChange}
                    className={classnames("", {
                        invalid: errors.email
                    })}/>
                    <input error={errors.password} type="password" name="password" value={this.state.password} onChange={this.onChange} 
                    className={classnames("", {
                        invalid: errors.password
                    })}/>
                    <input error={errors.password2} type="password" name="password2" value={this.state.password2} onChange={this.onChange}
                    className={classnames("", {
                        invalid: errors.password2
                    })}/>
                    <button type="submit" className="btn btn-delete">회원가입</button>
                </form>
            </div>
    
        )
    }
    
    
}

RegisterPage.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(RegisterPage));
