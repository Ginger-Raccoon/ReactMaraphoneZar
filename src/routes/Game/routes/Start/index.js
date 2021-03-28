import {useHistory} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import PokemonCard from "../../../../components/PokemonCard";

import database from "../../../../service/firebase";

import s from './style.module.css';
import {PokemonContext} from "../../../../context/pokemonContext";

const StartPage = () => {
    const history = useHistory();
    const pokemonsContext = useContext(PokemonContext)
    console.log("####: pokemonsContext", pokemonsContext)
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

    const choiceCard = (key) => {
        const pokemon = {...pokemons[key]}
        pokemonsContext.onSelectedPokemons(key, pokemon)
        setPokemons(prevState => ({
            ...prevState,
            [key]:{
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }))
    }

    const handlerStartGameClick = () => {
        history.push('/game/board')
    }
    return (
        <>
            <div className={s.buttonWrap}>
                <button
                    onClick={handlerStartGameClick}
                    disabled={Object.keys(pokemonsContext.pokemons).length < 5}
                >
                    Start Game
                </button>
            </div>
                <div className={s.flex}>

                    {
                        Object.entries(pokemons).map(([key, {objID, name, img, id, type, values, selected}]) =>
                            <PokemonCard
                                className={s.card}
                                key={key}
                                objID={key}
                                name={name}
                                type={type}
                                values={values}
                                img={img}
                                id={id}
                                isActive={true}
                                isSelected={selected}
                                handleClick={() => {
                                    if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                                        choiceCard(key)
                                    }
                                }}
                            />)
                    }
                </div>


        </>
    )
};

export  default StartPage;
