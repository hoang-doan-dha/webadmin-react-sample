import React, { useEffect, useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import useWindowSize from '../../utils/useWindowSize';
import './NavbarItem.css';

function NavbarItem(props) {
    const [open, setOpen] = useState(false);
    const [left, setLeft] = useState(null);
    const ref = useRef(null);
    const size = useWindowSize();

    useEffect(() => {
        const offsetLeft = ref.current.offsetLeft;
        setLeft(offsetLeft - 120);
    }, [size]);

    return (
        <OutsideClickHandler className="navbar_item"
            onOutsideClick={() => setOpen(false)}
        >
            <div className="navbar_item_icon"
                ref={ref}
                onClick={() => setOpen(!open)}
            >
                {props.icon}
            </div>
            {
                open &&
                <div className="navbar_item_dropdown"
                    style={{ left: left }}
                >
                    {props.children}
                </div>
            }
        </OutsideClickHandler>
    )
}

export default NavbarItem
