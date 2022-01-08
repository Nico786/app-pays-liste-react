import React, { Component } from 'react';
import axios from 'axios';
import Titre from '../../components/Titre';
import Pays from '../PaysManager/Pays/Pays';


class FichePays extends Component {

    state = {
        data: null,
        loading: false
    }


    componentDidMount = () => {
        this.setState({ loading: true })
        axios.get(`https://restcountries.com/v2/name/${this.props.nomPays}?fullText=true`)
            .then(reponse => {
                //console.log(reponse)
                this.setState({
                    loading: false,
                    data: reponse.data[0]
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({ loading: false })
            })
    }


    render() {
        return (
            <div className="container">
                <Titre>Information du Pays: {this.props.nomPays}</Titre>
                {   //si les données sont chargées, alors j'affiche le pays
                    this.state.data &&
                    <Pays
                        drapeau={this.state.data.flag}
                        nomFrancais={this.state.data.translations.fr}
                        region={this.state.data.region}
                        capitale={this.state.data.capital}
                        {...this.props}
                        afficherLien={true}
                    />
                }

            </div>
        )
    }
}

export default FichePays;