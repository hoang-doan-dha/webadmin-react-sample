import React from 'react'
import { useLocation } from 'react-router-dom'

function NotFoundScreen() {
    const location = useLocation();

    return (
        <div>
            <h4>Not Found 404</h4>
            <p>
                No match for <code>{location.pathname}</code>
            </p>
        </div>
    )
}

export default NotFoundScreen
