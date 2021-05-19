import React, { Fragment, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import deleteLater from "../deleteLater";
import actual from "../screens/Difficulties/Difficulties";
import HomeScreen from "../screens/Home/HomeScreen";
import ProblemsScreen from "../screens/Problems/ProblemsScreen";

export const UserRoutes = () => {
    console.log("Publico");
    return (
        <>
            {/*Navbar*/}
            <div>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />

                    <Route exact path="/delete" component={deleteLater} />

                    <Route exact path="/actual" component={ProblemsScreen} />

                    <Redirect to="/" />
                </Switch>
            </div>
            {/*Footer*/}
        </>
    );
};

export default UserRoutes;
