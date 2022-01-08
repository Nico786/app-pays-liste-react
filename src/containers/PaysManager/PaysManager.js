import React, { Component } from 'react';
import Titre from '../../components/Titre';
import Bouton from '../../components/Bouton';
import Pays from './Pays/Pays';
import axios from 'axios';

class PaysManager extends Component {
    state = {
        listePays: [],
        regionSelected: null,
        numeroPageActuelle: 1
    }

    componentDidMount = () => {
        this.handleSelectPaysParRegion('all')
    }

    handleSelectPaysParRegion = (region) => {
        let param = '';
        if (region === "all") param = region;
        else param = `region/${region}`

        axios.get(`https://restcountries.com/v2/${param}`)
            .then(reponse => {
                //console.log(reponse);
                const listePays = reponse.data.map(pays => {
                    return {
                        nomFrancais: pays.translations.fr,
                        drapeau: pays.flag,
                        pays: pays.country,
                        region: pays.region,
                        capitale: pays.capital
                    }
                })
                this.setState({
                    listePays,
                    regionSelected: region,
                    numeroPageActuelle: 1
                })
            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {
        let pagination = [];
        let listePays = '';
        if (this.state.listePays) {
            let fin = this.state.listePays.length / 10; //nombre de boutons de pagination (pour 10pays par pages)
            if (this.state.listePays.length % 10 !== 0) fin++ //si nombre de pays pas multiple de 10, rajouter une page (fin++) pour afficher ceux qui manquent. ex: 53 pays = 5 pages + 1 page avec 3 pays
            for (let i = 1; i <= fin; i++) {
                pagination.push(<Bouton
                    key={i}
                    typeBtn="btn-info m-1"
                    isSelected={this.state.numeroPageActuelle === i}
                    clic={() => this.setState({ numeroPageActuelle: i })}>
                    {i}</Bouton>
                );
            };

            const debutListe = (this.state.numeroPageActuelle - 1) * 10 //0, 10, 20...
            const finListe = this.state.numeroPageActuelle * 10 //10, 20, 30...
            const listePaysParPage = this.state.listePays.slice(debutListe, finListe);

            listePays = listePaysParPage.map(pays => {
                console.log(pays)
                return (
                    <div className="col-12 col-md-6" key={pays.nom}>
                        <Pays {...pays} {...this.props} />
                    </div>
                )
            })
        }

        return (
            <div className="container">
                <Titre>Liste des pays du monde</Titre>
                <Bouton
                    typeBtn="btn-info"
                    isSelected={this.state.regionSelected === "all"}
                    clic={() => this.handleSelectPaysParRegion("all")}>Tous</Bouton>
                <Bouton
                    typeBtn="btn-info"
                    isSelected={this.state.regionSelected === "Europe"}
                    clic={() => this.handleSelectPaysParRegion("Europe")}>Europe</Bouton>
                <Bouton
                    typeBtn="btn-info"
                    isSelected={this.state.regionSelected === "Africa"}
                    clic={() => this.handleSelectPaysParRegion("Africa")}>Afrique</Bouton>
                <Bouton
                    typeBtn="btn-info"
                    isSelected={this.state.regionSelected === "Asia"}
                    clic={() => this.handleSelectPaysParRegion("Asia")}>Asie</Bouton>
                <Bouton
                    typeBtn="btn-info"
                    isSelected={this.state.regionSelected === "Americas"}
                    clic={() => this.handleSelectPaysParRegion("Americas")}>Amérique</Bouton>
                <Bouton
                    typeBtn="btn-info"
                    isSelected={this.state.regionSelected === "Oceania"}
                    clic={() => this.handleSelectPaysParRegion("Oceania")}>Océanie</Bouton>
                Nombre de pays: <span>{this.state.listePays.length}</span>
                <div className="row no-gutters">
                    {listePays}
                </div>
                <div>{pagination}</div>
            </div>
        )
    }
}

export default PaysManager;