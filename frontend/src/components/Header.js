import React from "react";
import { Link } from "react-router-dom";

function Header() {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <a className="navbar-brand" href="#" style={{color:"red"}}>Navbar</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/add">Create Student</a>
                        <Link to="/add" className="nav-link">Create Student</Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/">All Student</a> refresh
                        <Link to="/" className="nav-link">All Student</Link> no refresh
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Header;