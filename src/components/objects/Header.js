import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="header-bar">
                <Link href="../pages/join-now" id="join-now-button">Join GDC</Link>
                <a href="../pages/to-do.html" className="button">Projects</a>
                <a href="../pages/to-do.html" className="button">To-Do</a>
            </div>
        )
    }
}

export default Header;
