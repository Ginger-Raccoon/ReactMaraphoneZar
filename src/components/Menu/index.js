import {Link} from "react-router-dom";
import cn from 'classnames';

import ROUTES from './assets/menu__item.json';

import s from './style.module.css';

const Menu = ({ onClickButton, state }) => {
    const handlerClickButton = () => {
        onClickButton && onClickButton();
    }
    return(
        <>
            <div className={cn(s.menuContainer, {[s.active] : state})}>
                <div className={s.overlay} />
                <div className={s.menuItems}>
                    <ul>
                        {
                            ROUTES.map(({link, name}, index) => (
                                <li key={index} onClick={handlerClickButton}>
                                    <Link to={link}>
                                        {name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu;
