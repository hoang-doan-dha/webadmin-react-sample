import React from 'react';
import SidebarItem from '../../common/SidebarItem/SidebarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                <img src="instagram.png" alt="logo" className="sidebar_logo" />
            </div>
            <div>
                <SidebarItem
                    link="/dashboard"
                    leftIcon={<FontAwesomeIcon icon={faCoffee}/>}
                    rightTitle="Dashboard"
                />
                <SidebarItem
                    link="/users"
                    leftIcon={<FontAwesomeIcon icon={faCoffee}/>}
                    rightTitle="Manage Users"
                />
                <SidebarItem
                    link="/admins"
                    leftIcon={<FontAwesomeIcon icon={faCoffee}/>}
                    rightTitle="Admins"
                />
            </div>
        </div>
    )
}

export default Sidebar
