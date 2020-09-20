import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="header-bar">
                <Link to="join-now" id="join-now-button">Join GDC</Link>
                <a href="our-projects" className="button">Projects</a>
                <Link to="to-do" className="button">To-Do</Link>
            </div>
        )
    }
}

export default Header;
