import s from './style.module.css';


const NotFound = () => {
    return (
        <>
            <div className={s.root}>
                <div className={s.forest} />
                <div className={s.container}>
                    <h1> 404 NotFound </h1>
                </div>
            </div>
        </>
    )
}

export default NotFound