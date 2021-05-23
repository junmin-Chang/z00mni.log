import React, { useState } from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import { connect } from 'react-redux'
// pages
import Home from './components/Home';
import Post from './components/Post';
import PostList from './components/PostList';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage'
// styles
import './style.css'

// components
import Navbar from './components/Navbar';
import Write from './components/Write/Write';
import { ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global'
// auth
import { loginUser } from './actions/authActions'

const App = () => {
    
    // false? light : dark
    const [theme, setTheme] = useState(false);
    const toggleTheme = () => {
        if (theme === false) {
            setTheme(true);
        } else {
            setTheme(false);
        }
    }
 
    
    return (

        <ThemeProvider theme={theme === false? lightTheme : darkTheme}>
            <GlobalStyles/>
            <BrowserRouter basename={window.location.pathname || ''}>
                <Navbar onThemeToggled={toggleTheme} theme={theme}/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/posts/:id' component={Post}/>
                    <Route path='/posts' component={PostList}/>
                    <Route path='/write' component={Write}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                </Switch>
            </BrowserRouter>
            </ThemeProvider>
       

    )
}



const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(App);