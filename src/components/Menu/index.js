import cn from 'classnames';
import ROUTES from './assets/menu__item.json';
import MenuItem from "../Menu__item";
import s from './stule.module.css';

const Menu = ({ state }) => {
    return(
        <>
            <div className={cn(s.menuContainer, {[s.active] : state})}>
                <div className={s.overlay} />
                <div className={s.menuItems}>
                    <ul>
                        {
                            ROUTES.map(item => <MenuItem
                                link={item.link}
                                name={item.name}
                            />)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu;
