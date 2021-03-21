import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';

import PokemonCard from "../../components/PokemonCard";

import database from "../../service/firebase";

import s from './style.module.css';
import Layout from "../../components/Layout";

const GamePage = () => {
    const history = useHistory();
    const [pokemons, setPokemons] = useState({})
    const handlerClick = () => {
        history.push('/')
    }

    const updateData = () => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }

    useEffect(() => {
        updateData()
    }, []);

    const choiceCard = (id, objID) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (item[0] === objID) {
                    pokemon.active = true;
                    database.ref('pokemons/' + objID).update({
                        active: pokemon.active,
                    }, (error) => {
                        if ( !error ){
                            console.log("update complete!")
                        }
                        else{
                            console.log("update error!")
                        }
                    })
                };

                acc[item[0]] = pokemon;
                return acc;
            }, {});
        });
    }

    const resetCards = () => {
        Object.entries(pokemons).map(([key, {active}]) => {
            if (active === true ) {
                database.ref('pokemons/' + key).update({
                    active: false,
                }, (error) => {
                    if (!error) {
                        updateData()
                        console.log('update complete!')
                    } else {
                        console.log('update error!')
                    }
                })
            }
        }, {});
    }

    const addCard = () => {
        const obj = pokemons;
        let keys = Object.keys(pokemons);
        const newKey = database.ref().child('pokemons').push().key;
        console.log(Math.floor(Math.random() * (keys.length - 1)) + 1)
        database.ref('pokemons/' + newKey).set(obj[keys[keys.length - (Math.floor(Math.random() * (keys.length - 1)) + 1)]]);
        updateData();
    }

    return (
        <>
            <div className={s.root}>
                <div className={s.forest} />
                <div className={s.container}>
                    <h1> Game Page </h1>
                    <button className={s.button} onClick={handlerClick}>
                        Main menu
                    </button>
                </div>
            </div>
            <Layout colorBg='#181d23'>
                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(([key, {objID, name, img, id, type, values, active}]) =>
                            <PokemonCard
                                key={key}
                                objID={key}
                                name={name}
                                type={type}
                                values={values}
                                img={img}
                                id={id}
                                isActive={active}
                                handleClick={choiceCard}
                        />)
                    }
                </div>
                <div className={s.buttons}>
                    <button className={s.button} onClick={resetCards}>
                        Reset Cards
                    </button>
                    <button className={s.button} onClick={addCard}>
                        Add Card
                    </button>
                </div>
            </Layout>

        </>
    )
};

export  default GamePage;
