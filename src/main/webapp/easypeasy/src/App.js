import React from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Authentication from "./components/Authentication/Authentication.js";
import Home from "./components/HomePage/Home";

class App extends React.Component {


    render() {
        let routes = (
            <Switch>
                <Route exact path='/' component={Authentication}/>
            </Switch>
        );

        if (localStorage.getItem("userId") != null) {
            routes = (
                <Switch>
                    <Route
                        path="/Home"
                        component={Home}
                    />
                    <Route exact path='/' component={Authentication}/>
                </Switch>
            );

        }
        return (
            <BrowserRouter>
                <div className="App">
                    {routes}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;