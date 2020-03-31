import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../img/user-solid.svg';
import imageIcon from '../img/image-regular.svg';
import profileImg from '../img/profile.jpg';
import './Navbar.scss';

function Navbar() {
    const [activeTab, setActiveTab] = useState('');
    return(
        <header>
            <div id="background-image"></div>
            <div id="profile-image">
                <img src={profileImg} title="User's image" alt="profile" />
            </div>
            <nav>
                <div className="icons">
                    <Link to="/profile" onClick={() => setActiveTab('profile')}>
                        <div className={`icon-container ${activeTab === 'profile' ? 'active' : ''}`}>
                            <img className="user" src={ userIcon } title="User's profile" alt="user" />
                        </div>
                    </Link>
                    <Link to="/gallery" onClick={() => setActiveTab('gallery')}>
                        <div className={`icon-container ${activeTab === 'gallery' ? 'active' : ''}`}>
                            <img className="gallery" src={ imageIcon } title="User's gallery" alt="gallery" />
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;