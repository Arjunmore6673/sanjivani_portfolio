import './App.css';
import LandingPage from './pages/landing'
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Card3d from "./components/Card3d";


function App() {
    return (
        <Router>
            <Switch>


                <Route path="/card3d">
                    <Card3d/>
                </Route>


                <Route path="portfolio-arjun-more">
                    <LandingPage
                        from={'portfolio'}/>
                </Route>


                <Route path="/">
                    <LandingPage/>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
