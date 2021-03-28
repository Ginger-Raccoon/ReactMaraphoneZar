import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBZzh2pVp-NDPC8cOrhaELkA5zm2grCaog",
    authDomain: "react-marathone-247d7.firebaseapp.com",
    databaseURL: "https://react-marathone-247d7-default-rtdb.firebaseio.com",
    projectId: "react-marathone-247d7",
    storageBucket: "react-marathone-247d7.appspot.com",
    messagingSenderId: "610020772735",
    appId: "1:610020772735:web:8b3cc7aef28c706775284a"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    offPokemonSoket = () => {
        this.database.ref('pokemons').off();
    }


    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        })
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val())
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = async (data, replaceIdToKey) => {
        const newKey = (await this.database.ref().child('pokemon').push()).key;
        if(replaceIdToKey){
            data.id = newKey
        }
        this.database.ref('pokemons/' + newKey).set(data);
    }

}


export default Firebase
