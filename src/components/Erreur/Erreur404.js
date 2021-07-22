import React from 'react';
import imgErreur404 from "../../assets/error404.png"

const Erreur404 = (props) =>(
    <div className="text-center">
        <img src={imgErreur404} alt="Erreur 404" width="50%"/>
        <div>La page demandée n'existe pas</div>
    </div>
)

export default Erreur404;