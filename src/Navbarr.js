import React from 'react'
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default function Navbarr() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img src={logo} width="90" height="50" loading="lazy" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link active" aria-current="page">About Disaster</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/quiz" class="nav-link active" aria-current="page">Quiz</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/prediction" class="nav-link active" aria-current="page">Prediction</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
