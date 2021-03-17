import {useHistory} from 'react-router-dom';
import {useState} from 'react';


import POKEMONS from "../../assets/pokemons.json";
import PokemonCard from "../../components/PokemonCard";
import s from './style.module.css';
import Layout from "../../components/Layout";

const GamePage = () => {
    const pokemonArr = POKEMONS;
    const [isData, setData] = useState(pokemonArr);
    const  history = useHistory();
    const handlerClick = () => {
        history.push('/')
    }
    const choiceCard = (id) => {
        const res =isData.filter(item => {
            if(item.id === Number(id)) {
                item["active"] = true
            }
            return true
        });
        setData(res)
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
                        isData.map(item => <PokemonCard
                            key={item.id}
                            name={item.name}
                            type={item.type}
                            values={item.values}
                            img={item.img}
                            id={item.id}
                            choice={choiceCard}
                            active={item.active}
                        />)
                    }
                </div>
            </Layout>

        </>
    )
};

export  default GamePage;