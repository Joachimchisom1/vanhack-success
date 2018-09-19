import React from "react";
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard';
import SuccessListTable from "../components/SuccessList/SuccessList";
const Main = () => {
    return (
        <main>
            <Route exact path="/list" component={SuccessListTable}/>
            <Route exact path="/" component={Dashboard}/>
        </main>
    )
}
export default Main;