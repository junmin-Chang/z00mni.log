import React, { useState, Suspense, lazy} from 'react';
import {Switch, Route } from 'react-router-dom';
// styles
import './style.css'
// components
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global'
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import { useSelector} from "react-redux";
// pages
const Home = lazy(() => import('./components/Home'))
const PostList = lazy(() => import('./components/PostList'))
const Post = lazy(() => import('./components/Post'))
const Login = lazy(() => import('./components/Login'))
const Write = lazy(() => import('./components/Write/Write'))

const App: React.FC<any> = () => {
    // false? light : dark
    const { isAuthenticated } : any = useSelector<any>(state => state.auth)
    const [theme, setTheme] = useState<boolean>(false);
    const toggleTheme = () => {
        if (!theme) {
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
        }
    }, [isAuthenticated])
 
    
    return (
        <>
        <Helmet>
            <title>zoomni.Dev</title>
            <meta name="description" content="풀스택을 향하여"/>
            <meta property="og:title" content="장준민의 개발 블로그"/>
            <meta property="og:description" content="풀스택을 향하여"/>

        </Helmet>
        <ThemeProvider theme={!theme ? lightTheme : darkTheme}>
            <GlobalStyles/>
                <Navbar onThemeToggled={toggleTheme} theme={theme}/>
                <ToastContainer/>
            <Suspense fallback={null}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/posts/:id' render={() => <Post theme={theme}/>}/>
                    <Route path='/posts' render={() => <PostList theme={theme}/>}/>
                    <Route path='/write' component={Write}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </Suspense>

            </ThemeProvider>
       </>

    )
}

export default App;