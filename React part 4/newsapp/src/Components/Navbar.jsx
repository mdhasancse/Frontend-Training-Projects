import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg text-white bg-dark">
                    <div className="container-fluid  ">
                        <Link className="navbar-brand text-white" to="/">News Application</Link>
                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon  "></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav text-white me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link className="nav-link text-white" aria-current="page"  to="/">Home</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link text-white" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white" to="/general">General</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white" to="/science">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white" to="/technology">Technology</Link></li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
