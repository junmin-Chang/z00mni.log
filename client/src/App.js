import React, { useState } from 'react';
import { BrowserRouter, Switch , Route, HashRouter } from 'react-router-dom';
// pages
import Home from './components/Home';
import Post from './components/Post';
import PostList from './components/PostList';

// styles
import './style.css'

// components
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Write from './components/Write/Write';
import { ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global'



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
                <Route path='/profile' component={Profile}/>
                <Route path='/posts/:id' component={Post}/>
                <Route path='/posts' component={PostList}/>
                <Route path='/posts/write' component={Write}/>
            </Switch>
        </BrowserRouter>
        </ThemeProvider>

    )
}


export default App;