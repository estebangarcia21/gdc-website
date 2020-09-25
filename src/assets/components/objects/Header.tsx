import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div id='header-bar'>
                    <Link to='join-gdc' className='header-button'>
                        Join GDC
                    </Link>
                    <Link to='our-games' className='header-button'>
                        Our Games
                    </Link>
                    <Link to='to-do' className='header-button'>
                        To-Do
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;
