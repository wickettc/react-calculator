import React from 'react';
import '../css/button.css';

const Button = ({ char, handleButton }) => {
    const ident = typeof char === 'number' ? 'num' : 'operator';
    return (
        <button
            data-type={ident}
            data-char={char}
            className="button"
            onClick={(e) => handleButton(e)}
        >
            {char}
        </button>
    );
};

export default Button;
