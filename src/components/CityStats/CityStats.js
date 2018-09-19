import React, { Component } from 'react';
import underscore from 'underscore';
import successData from '../../assets/success-cases';
import { getRandomColor } from '../../utils/color-generator';
import { PieChart, Pie, Cell, Tooltip} from 'recharts';
import renderActiveShape from '../helpers/renderActiveShape';

export class CityStats extends Component {
    state = {
        statsData:undefined,
        activeIndex: 0,
        colors: []
    } 
    
    componentDidMount() {
        const areasData = underscore.groupBy(successData, 'City');
        const areas = Object.keys(areasData);
        const colors = [];
        let statsData = areas.map((area) => {
            colors.push(getRandomColor());
            return ({
                name: area || "Others",
                Hires: areasData[area].length
            })
        });
        statsData = underscore.sortBy(statsData,'Hires').reverse();
        this.setState({ statsData, colors});
    }
    onPieEnter=(data, index) => {
        this.setState({
        activeIndex: index,
        });
    }
    onPieClick = (data) => {
    }
    getLabel(data) {
        return data.name;
    }
    render() {
        const { statsData, colors, activeIndex } = this.state;
        return (
            <div className="flex-column-center city-container">
                {statsData && 
                    <PieChart width={700} height={400}>
                    <Pie data={statsData} cx="350" cy="200" dataKey="Hires" outerRadius={150} innerRadius={100}
                    onMouseEnter={this.onPieEnter} 
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape} 
                    >
                      {
                        statsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                      }
                    </Pie>
                    <Tooltip/>
                  </PieChart>
                }
                <h3>Hires Per City</h3>   
            </div>
        )
    }
}

export default CityStats;