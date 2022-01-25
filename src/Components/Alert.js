import React, { useEffect } from 'react';
import './css_files/alert.css'

const Alert = ({ type, msg, removeAlert }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 2000)
        return () => clearTimeout(timeout)
    }, [])

    return <div className={`alert alert-${type}`}>
        <p>{msg}</p>

    </div>;
}

export default Alert;
