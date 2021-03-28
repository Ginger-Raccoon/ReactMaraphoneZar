import {useState} from 'react';
import cn from 'classnames';
import PokemonCard from "../../../../../../components/PokemonCard";
import Arrow from './assets/arrow.png';
import s from "./style.module.css";

const PlayerBoard = ({ player, cards, onClickCard, disabled = false }) => {
    const [isSelected, setSelected] = useState(null)
    return (
        <div>
            <div className={cn(s.container, {[s.visible] : disabled})}>
                <img className={s.img} src={Arrow} alt='arrow' />
            </div>
            {
                cards.map((item) => (
                    <div
                        className={cn(s.cardBoard, {
                        [s.selected] : isSelected === item.id
                        })}
                        onClick={() => {
                            if(!disabled) {
                                setSelected(item.id);
                                onClickCard && onClickCard({
                                    ...item,
                                    player
                                });
                            }
                        }}
                    >
                        <PokemonCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            img={item.img}
                            type={item.type}
                            values={item.values}
                            minimize
                            isActive
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default PlayerBoard;
