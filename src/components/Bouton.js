import React from 'react';

const Bouton = (props) => {
    let cssBtn = `btn ${props.typeBtn} m-1`
    return <button
        className={cssBtn}
        onClick={props.clic}
        style={props.isSelected ? { opacity: 1 } : { opacity: .7 }}
    >
        {props.children}
    </button>
}

export default Bouton;