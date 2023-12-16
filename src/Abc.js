import React from 'react'
import App from './App'
import logo from './logo.png'
import Quiz from './components/Quiz'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Education from './Education';


export default function Abc() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
        <div className='nav-scroller'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img src={logo} width="90" height="50" loading="lazy" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link" aria-current="page">About Disaster</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/quiz" class="nav-link" aria-current="page">Quiz</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/prediction" class="nav-link" aria-current="page">Prediction</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>

        <Switch>
          <Route path="/about">
            <Education /> 
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/prediction">
            <Prediction />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
    return <h2>Home</h2>;
  }
  
  // function Quiz() {
  //   return <h2>quiz</h2>;
  // }
  
  function Prediction() {
    return <h2>prediction</h2>;
  }
