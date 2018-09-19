import React, { Component } from 'react';
import underscore from 'underscore';
import successData from '../../assets/success-cases';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';


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
        this.setState({ statsData});
    }

    render() {
        return (
            <div className="flex-column-center year-container">
                {this.state.statsData && 
                    <BarChart width={400} height={300} data={this.state.statsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Hires" fill="#8884d8" 
                            label={{ position: 'top' }}/>
                    </BarChart>
                }
                <h3>Hires Per Year</h3>
            </div>
        )
    }
}
export default YearStats;