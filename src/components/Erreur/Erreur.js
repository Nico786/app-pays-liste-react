import React from 'react';

const Erreur = (props) =>(
    <div className="alert alert-danger">{props.children}</div>
)

export default Erreur;