import React from 'react';

const Titre = (props) => {
    let cssTitre = "text-center border border-dark bg-primary text-light p-2 m-2"
    return (
        <h1 className={cssTitre}>{props.children}</h1>
    );
}



export default Titre;