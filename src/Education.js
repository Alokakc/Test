import React from 'react'
import './Education.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Earthquake from './components/Earthquake';
import Flood from './components/Flood';
import Tsunami from './components/Tsunami';

export default function Education() {
    return (
        <Router>
            <div>
                <div className="nav-scroller py-1 mb-3 border-bottom apna">
                    <nav className="nav nav-underline justify-content-between">
                        <Link to='/' className="nav-item nav-link link-body-emphasis">Earthquake</Link>
                        <Link to='/flood' className="nav-item nav-link link-body-emphasis">Flood</Link>
                        <Link to='/tsunami' className="nav-item nav-link link-body-emphasis">Tsunami</Link>
                        <Link to='/tornado' className="nav-item nav-link link-body-emphasis">Tornado</Link>
                        <Link to='/slide' className="nav-item nav-link link-body-emphasis">Land Slide</Link>
                    </nav>
                </div>
  
                <Switch>
                    <Route path='/flood'>
                        <Flood/>
                    </Route>
                    <Route path='/tsunami'>
                        <Tsunami/>
                    </Route>
                    <Route path='/tornado'>
                        <Earthquake/>
                    </Route>
                    <Route path='/slide'>
                        <Earthquake/>
                    </Route>
                    <Route path='/'>
                        <Earthquake/>
                    </Route>
                </Switch>


            </div>
        </Router>
    )
}
