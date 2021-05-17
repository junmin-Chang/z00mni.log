import React, { useState } from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
// pages
import Home from './components/Home';
import Post from './components/Post';
import PostList from './components/PostList';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

// styles
import './style.css'

// components
import Navbar from './components/Navbar';
import Write from './components/Write/Write';
import { ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global'

import Auth from './auth'


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
                <Route exact path='/' component={Auth(Home, null)}/>
                <Route path='/posts/:id'/>
                <Route path='/posts' render={() => <PostList theme={theme}/>}/>
                <Route path='/write' component={Auth(Write, true)}/>
                <Route path="/login" component={Auth(LoginPage, false)}/>
                <Route path="/register" component={Auth(RegisterPage, false)}/>
            </Switch>
        </BrowserRouter>
        </ThemeProvider>

    )
}


export default App;