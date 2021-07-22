import React from "react";
import PaysManager from "./containers/PaysManager/PaysManager";
import FichePays from "./containers/FichePays/FichePays";
import Erreur from "./components/Erreur/Erreur";
import Erreur404 from "./components/Erreur/Erreur404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => <h1>PAGE D'ACCUEIL</h1>} />
        <Route path="/pays" exact component={PaysManager} />
        <Route path="/pays/:id" render={(props) => <FichePays nomPays={props.match.params.id} {...props} />} />
        <Route render={() => <Erreur><Erreur404/></Erreur>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
