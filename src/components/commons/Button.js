import React from 'react';
import './../../assets/css/style.css'

const Button = () => {
    return (
        <div>
            <button onClick={() =>
                alert('Hello')}>Button</button>
        </div>
    );
};

export default Button;