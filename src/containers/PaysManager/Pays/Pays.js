import React from 'react';
import { NavLink } from 'react-router-dom';

const Pays = (props) => (
   <div className="row no-gutters border m-1">
      <div className="col-4">
         <img src={props.drapeau} className="p-2" alt={props.nomFrancais} width="100%" />
      </div>
      <div className="col">
         <h2>{props.nomFrancais}</h2>
         <div>Région: {props.region}</div>
         <div>Capitale: {props.capitale}</div>
         {
            !props.afficherLien &&
            <NavLink to={'/pays/' + props.nomFrancais} className="nav-link">Voir la fiche pays</NavLink>
         }
      </div>

   </div>
)

export default Pays;