import s from './style.module.css';

const Layout = ({title, children, colorBg, urlBg}) => {
    const layoutStyle = {
        backgroundColor: colorBg || '',
        backgroundImage: urlBg ? `url('${urlBg}')` : ''
    };
    return (
        <>
            <section className={s.root} style={layoutStyle}>
                <div className={s.wrapper}>
                    <article>
                        <div className={s.title}>
                            <h3>{title}</h3>
                            <span className={s.separator} />
                        </div>
                        <div className={`${s.desc} ${s.full}`}>
                            <p>{children}</p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Layout