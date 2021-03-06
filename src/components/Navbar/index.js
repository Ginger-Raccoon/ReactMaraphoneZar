
import cn from 'classnames';

import s from './style.module.css';

const NavBar = ({ onClickButton, state }) => {
    const handlerClickButton = () => {
        onClickButton && onClickButton();
    }


    return(
        <>
            <nav className={s.root}>
                <div className={s.navWrapper}>
                    <p className={s.brand}>
                        LOGO
                    </p>
                    <a href="#" className={cn(s.menuButton, {[s.active] : state})} onClick ={ handlerClickButton }>
                        <span />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
