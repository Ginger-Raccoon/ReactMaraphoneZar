import {Switch, Route, useRouteMatch} from 'react-router-dom'
import { useState } from 'react'

import StartPage from "../Game/routes/Start";
import BoardPage from "../Game/routes/Board";
import FinishPage from "../Game/routes/Finish";
import {PokemonContext} from "../../context/pokemonContext";

const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({})
    const match = useRouteMatch();
console.log(selectedPokemons)
    const handleSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if (prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key]

                return copyState
            }
            return {
                ...prevState,
                [key]: pokemon,
            }
        })
    }
    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            onSelectedPokemons: handleSelectedPokemons
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;
