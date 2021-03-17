import s from './style.module.css'

const GamePage = ({onChangePage}) => {
    const handlerClick = () => {
        onChangePage && onChangePage('app')
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
        </>
    )
};

export  default GamePage;