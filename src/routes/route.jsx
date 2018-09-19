import React from "react";
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard';
import SuccessListTable from "../components/SuccessList/SuccessList";
const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/list" component={SuccessListTable}/>
            <Route component={Dashboard}/>
        </Switch>
    )
}
export default Main;