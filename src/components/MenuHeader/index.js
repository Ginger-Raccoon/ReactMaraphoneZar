import {useState} from 'react';

import NavBar from "../Navbar";
import Menu from "../Menu";
const MenuHeader = () => {
    let [isActive, setActive] = useState(false);
    const handlerClickButton = (isActive) => {
        setActive(!isActive)
    }
    return(
        <>
            <Menu  state={ isActive } />
            <NavBar onClickButton={handlerClickButton} />
        </>
    )
};

export default MenuHeader;