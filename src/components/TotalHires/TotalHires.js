import React, { Component } from 'react';
import successData from '../../assets/success-cases';
import { Link } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
const history = createHistory();

class TotalHires extends Component {
    navigate = () => {
        history.push('/list');
        window.location.href = window.location.href;
    }
    render() {
        return (
    //<Link to="/list">
        <div className="flex-column-center total-hires-container" onClick={this.navigate}>
            <span className="total-number">{successData.length}</span>
            <span className="total-hires">Vanhackers Hired</span>
        </div>
    //</Link>
)}
}

export default TotalHires;