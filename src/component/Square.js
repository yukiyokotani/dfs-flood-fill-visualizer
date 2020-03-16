import React from 'react';

const Square = (props) => {
    let className = props.isInProcess ? "isInProcess" : "";
    className = props.isProcessed ? className + " isProcessed" : className;

    return (
        <td
            className={className}
            onClick={props.onClick}
        >
            {(props.value === 1) ? "■" : null}
            {(props.value === 2) ? "🏠" : null}
            {(props.value === 3) ? "🐟" : null}
        </td >
    )
}

export default Square;