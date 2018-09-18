import React, { Component } from 'react';
import underscore from 'underscore';
import successData from '../../assets/success-cases';
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area} from 'recharts';
export class YearStats extends Component {
    state = {
        statsData:undefined
    } 
    componentDidMount() {

        const yearStats = underscore.groupBy(successData, 'Year');
        
        const years = Object.keys(yearStats);
        const statsData = years.map((year) => ({
            Year: year,
            Hires: yearStats[year].length
        }));
        console.log(underscore.sortBy(statsData, function(year) {
            return year.Hires;
        }));
        this.setState({ statsData});
    }
    onBarClick = (data) => {
        console.log(data);
    }
    render() {
        return (
            <div className="flex-column-center year-container">
                {this.state.statsData && 
                    <AreaChart width={700} height={300} data={this.state.statsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area dataKey="Hires" fill="#8884d8" onClick={this.onBarClick}/>
                    </AreaChart>
                }
                <h3>Hires by Years</h3>
            </div>
        )
    }
}
export default YearStats;