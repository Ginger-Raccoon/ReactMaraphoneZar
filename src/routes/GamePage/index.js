import {useHistory} from 'react-router-dom';
import {useState} from 'react';


import POKEMONS from "../../assets/pokemons.json";
import PokemonCard from "../../components/PokemonCard";
import s from './style.module.css';
import Layout from "../../components/Layout";

const GamePage = () => {
    const history = useHistory();
    const [pokemon, setPokemon] = useState(POKEMONS)
    const handlerClick = () => {
        history.push('/')
    }
    const choiceCard = (id) => {
        setPokemon(prevState => prevState.map(item => item.id === id ? { ...item, active: !item.active } : item))
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
                        pokemon.map(item => <PokemonCard
                            key={item.id}
                            name={item.name}
                            type={item.type}
                            values={item.values}
                            img={item.img}
                            id={item.id}
                            active={item.active}
                            handleClick={choiceCard}
                        />)
                    }
                </div>
            </Layout>

        </>
    )
};

export  default GamePage;
