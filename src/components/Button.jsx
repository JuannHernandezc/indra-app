import React from 'react';

const Button = ({name, className, handleSubmit }) => {
    return(
        <>
            <button onClick={handleSubmit} className={className}>{name}</button>
        </>

    )
}
export default Button;
