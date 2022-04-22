import React from 'react';
import * as FaIcons from 'react-icons/io';
import "./MagicNavbar.css";

const MagicNavbar = () => {
    return (
        <div className="navigation">
            <ul>
                <li className="list">
                    <a href="#">
                        <span className="icon"></span>
                        <span className="text">Home</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon"></span>
                        <span className="text">Profile</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon"></span>
                        <span className="text">Messages</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon"></span>
                        <span className="text">Photos</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon"></span>
                        <span className="text">Settings</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MagicNavbar;