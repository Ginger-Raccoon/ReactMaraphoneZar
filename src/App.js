
import {useLocation, Route, Switch, Redirect} from "react-router-dom";
import cn from 'classnames';

import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import ContactPage from "./routes/ContactPage";
import AboutPage from "./routes/AboutPage";
import NotFound from "./routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import s from "./style.module.css"

const App = () => {
    const location = useLocation()
    const isPadding = location.pathname === '/' || location.pathname === '/game/board';
    return(
            <Switch>
                <Route path="/404" component={NotFound} />
                <Route>
                    <>
                        {/*<MenuHeader bgActive={!isPadding} />*/}
                        <div className={cn(s.wrap, {
                            [s.isHomePage] : isPadding
                        })}>
                            <Switch>
                                <Route path="/" exact component={HomePage}/>
                                <Route path="/welcome" component={HomePage}/>
                                <Route path="/game" component={GamePage}/>
                                <Route path="/contact" component={ContactPage}/>
                                <Route path="/about" component={AboutPage } />
                                <Route render={() => (
                                    <Redirect to="/404" />
                                )}/>
                            </Switch>
                        </div>
                        <Footer />
                    </>
                </Route>
            </Switch>
    )

};

export default App;
