import React, { useState } from 'react';
import { Switch , Route } from 'react-router-dom';
// pages
import Home from './components/Home';
import Post from './components/Post';
import PostList from './components/PostList';
import Login from './components/Login';
// styles
import './style.css'
// components
import Navbar from './components/Navbar';
import Write from './components/Write/Write';
import { ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global'
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet'


const App = () => {
    const { isAuthenticated } = useSelector(state => state.auth)
    // false? light : dark
    const [theme, setTheme] = useState(false);
    const toggleTheme = () => {
        if (theme === false) {
            setTheme(true);
        } else {
            setTheme(false);
        }
    }
    useEffect(() => {
    
        if (isAuthenticated) {
            toast.success('로그인 성공! 🥰', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        } else {
            toast.warn('로그인 안됨(게스트 모드 👻)', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
      
                })
        }
    }, [isAuthenticated])
 
    
    return (
        <>
        <Helmet>
            <title>Zoomni.Dev</title>
            <meta name="description" content="풀스택을 향하여"/>
            <meta property="og:title" content="장준민의 개발 블로그"/>
            <meta property="og:description" content="풀스택을 향하여"/>

        </Helmet>
        <ThemeProvider theme={theme === false ? lightTheme : darkTheme}>
            <GlobalStyles/>
                <Navbar onThemeToggled={toggleTheme} theme={theme}/>
                <ToastContainer/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/posts/:id' render={() => <Post theme={theme}/>}/>
                    <Route path='/posts' render={() => <PostList theme={theme}/>}/>
                    <Route path='/write' component={Write}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </ThemeProvider>
       </>

    )
}



export default App;