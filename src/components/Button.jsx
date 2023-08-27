import React from 'react';
import './Button.css'

const Button = ( { children, onClick} ) => {
    return ( 
        <>
            <div className="button" onClick={onClick}>{ children }</div>
        </>
     );
}
 
export default Button; 