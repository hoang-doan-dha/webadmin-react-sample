import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarItem.css';

function SidebarItem(props) {
    return (
        <NavLink to={props.link} className="sidebar_item" activeClassName="selected">
            <span className="sidebar_item_icon">{props.leftIcon}</span>
            <span className="sidebar_item_title">{props.rightTitle}</span>
        </NavLink>
    )
}

export default SidebarItem
