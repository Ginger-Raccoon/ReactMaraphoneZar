import {Switch, Route, useRouteMatch} from 'react-router-dom'
import { useState } from 'react'

import StartPage from "../Game/routes/Start";
import BoardPage from "../Game/routes/Board";
import FinishPage from "../Game/routes/Finish";

import { PokemonContext } from "../../context/pokemonContext";

const GamePage = () => {
    const match = useRouteMatch();
    const [selectedPokemons, setSelectedPokemons] = useState({})
    const [finishBoard, setFinishBoard] = useState([]);

    const handleSelectPokemons = (key, pokemon) => {
        setSelectedPokemons((prevState) => {
            if (prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key]
                return copyState
            }
                const newState = { ...prevState, [key]: pokemon};
                return newState;
        })
    }
    const clearPokemonContext = () => {
     setSelectedPokemons({});
     setFinishBoard({});
    }
    return (
        <PokemonContext.Provider value={
            {
                pokemons: selectedPokemons,
                handleSelectPokemons,
                finishBoard: finishBoard,
                setFinishBoard,
                clearPokemonContext
            }
        }>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;
