import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarItem.css';

function SidebarItem(props) {
    return (
        <Link to={props.link} className="sidebar_item">
            <span className="sidebar_item_icon">{props.leftIcon}</span>
            <span className="sidebar_item_title">{props.rightTitle}</span>
        </Link>
    )
}

export default SidebarItem
