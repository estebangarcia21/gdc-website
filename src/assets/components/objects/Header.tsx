import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className='header-bar'>
                    <Link to='gdc-react-deploy/join-now' id='join-now-button'>
                        Join GDC
                    </Link>
                    <Link to='gdc-react-deploy/our-games' className='button'>
                        Our Games
                    </Link>
                    <Link to='gdc-react/deploy/to-do' className='button'>
                        To-Do
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;
