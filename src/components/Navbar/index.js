import {useState} from 'react';
import cn from 'classnames';

import s from './style.module.css';

const NavBar = ({onClickButton}) => {
    const [isActive, setActive] = useState(false);

    const handlerClick = () => {
        setActive(!isActive)
        onClickButton(isActive);
    }
    return(
        <>
            <nav className={s.root}>
                <div className={s.navWrapper}>
                    <p className={s.brand}>
                        LOGO
                    </p>
                    <a className={cn(s.menuButton, {[s.active] : isActive})} onClick={handlerClick}>
                        <span />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default NavBar;