
const GamePage = ({onChangePage}) => {
    const handlerClick = () => {
        onChangePage && onChangePage('app')
    }
    return(
        <>
            This is Game Page!!!
            <button onClick={handlerClick}>
                Main menu
            </button>
        </>

    )
}

export  default GamePage;