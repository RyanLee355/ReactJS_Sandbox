import React from "react"

function test() {
    document.body.classList.toggle("darkMode");
    document.getElementById("dayNightIcon").classList.toggle("fa-moon");
    document.getElementById("dayNightIcon").classList.toggle("fa-sun");
}

export default function Navbar() {
    return (
        <nav>
            <p className="navbar-about navbar-hover">ABOUT</p>
            <a className="navbar-github navbar-hover" href="https://www.linkedin.com/in/ryanlee355/">
                <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <h1 id="navbar-name" className="navbar-hover">RYAN L.</h1>
            <a className="navbar-github navbar-hover" href="https://github.com/RyanLee355">
                <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <p className="navbar-contact navbar-hover">CONTACT</p>
            <a className="navbar-theme_button" onClick={test}>
                <i id="dayNightIcon" className="fa-solid fa-moon"></i>
            </a>
        </nav>
    )
}