import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="header-bar">
                <a href="../pages/join-now.html" id="join-now-button">Join GDC</a>
                <a href="../pages/to-do.html" className="button">Projects</a>
                <a href="../pages/to-do.html" className="button">To-Do</a>
            </div>
        )
    }
}

export default Header;
