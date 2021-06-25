import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Home from './Pages/Home/Home'
import Contributors from './Pages/Contributors/Contributors'
import Contact from './Pages/Contact/Contact'
import './App.css'
import BlogPost from './Components/SingleBlogPost/blogPost'

function App() {
    return (
        <>
            <Router>
                <Sidebar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/contributors' component={Contributors} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/post/:postId' component={BlogPost} />
                </Switch>
            </Router>

        </>

    )
}

export default App
