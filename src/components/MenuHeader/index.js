import {useState} from 'react';

import NavBar from "../Navbar";
import Menu from "../Menu";

const MenuHeader = () => {
    let [isActive, setActive] = useState(false);
    const handlerClickButton = () => {
        setActive(!isActive)
    }
    return(
        <div>
            <Menu  state={ isActive } onClickButton={handlerClickButton}/>
            <NavBar state={ isActive }  onClickButton={handlerClickButton}/>
        </div>
    )
};

export default MenuHeader;
