import React from 'react';
import { faBell, faLanguage, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarItem from '../../common/NavbarItem/NavbarItem';
import './Navbar.css';
import DropdownItem from '../../common/DropdownItem/DropdownItem';

function Navbar() {
    return (
        <div className="navbar">
            <NavbarItem
                icon={<FontAwesomeIcon icon={faLanguage} />}
            >
                <DropdownItem 
                    leftIcon={<FontAwesomeIcon icon={faUser} />}
                    rightTitle="English"
                />
                <DropdownItem 
                    leftIcon={<FontAwesomeIcon icon={faUser} />}
                    rightTitle="Vietnamese"
                />
            </NavbarItem>
            <NavbarItem
                icon={<FontAwesomeIcon icon={faBell} />}
            >
                <DropdownItem 
                    leftIcon={<FontAwesomeIcon icon={faUser} />}
                    rightTitle="Notification"
                />
                <DropdownItem 
                    leftIcon={<FontAwesomeIcon icon={faUser} />}
                    rightTitle="Settings"
                />
            </NavbarItem>
            <NavbarItem
                icon={<FontAwesomeIcon icon={faUser} />}
            >
                <DropdownItem 
                    leftIcon={<FontAwesomeIcon icon={faUser} />}
                    rightTitle="Profile"
                />
                <DropdownItem 
                    leftIcon={<FontAwesomeIcon icon={faUser} />}
                    rightTitle="Log out"
                />
            </NavbarItem>
        </div>
    )
}

export default Navbar
