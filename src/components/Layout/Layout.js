import ('./Layout.css');

const Layout = ({title, descr, colorBg, urlBg}) => {
    const layoutStyle = {
        backgroundColor: colorBg,
        backgroundImage: `url('${urlBg}')`,
        color: 'white',
    };
    return (
        <>
            <section className="root" style={layoutStyle}>
                <div className="wrapper">
                    <article>
                        <div className="title">
                            <h3>{title}</h3>
                            <span className="separator"></span>
                        </div>
                        <div className="desc full">
                            <p>{descr}</p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Layout