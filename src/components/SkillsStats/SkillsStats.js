import React, { Component } from 'react';
import underscore from 'underscore';
import successData from '../../assets/success-cases';
import { BarChart, XAxis, YAxis, Tooltip, Bar} from 'recharts';

export class SkillsChart extends Component {
    state = {
        statsData:[]
    } 
    componentDidMount() {
        const skillsChart = underscore.groupBy(successData, 'Skill');
        const skills = Object.keys(skillsChart);
        let statsData = skills.map((skill) => ({
            name: skill || "Others",
            Hires: skillsChart[skill].length
        }));
        statsData = underscore.sortBy(statsData,'Hires').reverse();
        this.setState({ statsData});
    }
    onPieClick = (data) => {
    }
    getLabel(data) {
        return data.name;
    }
    render() {
        return (
            <div className="flex-column-center skills-container">
                {this.state.statsData && 
                     <BarChart width={500} height={1500} data={this.state.statsData} layout="vertical">
                        <XAxis  type="number" orientation = "top"/>
                        <YAxis type="category" dataKey="name"/>
                        <Tooltip />
                        <Bar dataKey="Hires" fill="#2E4053" label={{ position: 'right' }}/>
                    </BarChart>
                }
                <h3>Hires Per Skill</h3>
            </div>
        )
    }
}
export default SkillsChart;