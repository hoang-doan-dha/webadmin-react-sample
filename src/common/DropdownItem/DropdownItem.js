import React from 'react';
import './DropdownItem.css';

function DropdownItem(props) {
    return (
        <div className="dropdown_item">
            <span>{props.leftIcon}</span>
            <span className="dropdown_item_title">{props.rightTitle}</span>
        </div>
    )
}

export default DropdownItem
