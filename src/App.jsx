import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Events from "./Events";
import Contact from "./Contact";
import Join from "./Join";
import Team from "./Team"
import Error from "./Error";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const App =() => {
    return ( 
    <>
        <Navbar />
        <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/events" component={Events} />
            <Route exact path ="/contact" component={Contact} />
            <Route exact path ="/join" component={Join} />
            <Route exact path ="/team" component={Team} />
            <Route component={Error} />
            <Redirect to="/" />
            </Switch>
    </> 
   );
};

export default App;