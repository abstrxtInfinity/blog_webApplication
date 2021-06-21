import React from 'react'
import Sidebar from './Components/Sidebar'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Home from './Pages/Home'
import Contributors from './Pages/Contributors'
import Contact from './Pages/Contact'
import './Style/App.css'


function App() {
    return (
        <>
            <Router>
                <Sidebar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/contributors' component={Contributors} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </Router>
        </>
    )
}

export default App
