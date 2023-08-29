import React, { useEffect } from 'react';
import { useGlobalContext } from './Context';

import './Alert.css'


const Alert = () => {
    
    const { alert, setAlert } = useGlobalContext()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert({active: false, msg: ''})
        }, 1500)
        return () =>  clearTimeout(timeout)
    }, [])
    
    return (
        <>
        <div className="alert">
            <p className="alert-message">{alert.msg}</p>
        </div>
        </>
        )
}

export default Alert