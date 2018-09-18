import React, { Component } from 'react';
import underscore from 'underscore';
import successData from '../../assets/success-cases';
import { BarChart, XAxis, YAxis, Tooltip, Bar} from 'recharts';

export class SkillsChart extends Component {
    state = {
        statsData:undefined
    } 
    componentDidMount() {
        const skillsChart = underscore.groupBy(successData, 'Skill');
        const skills = Object.keys(skillsChart);
        const statsData = skills.map((skill) => ({
            name: skill || "Others",
            Hires: skillsChart[skill].length
        }));
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
                     <BarChart width={1300} height={500} data={this.state.statsData} >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Hires" fill="#2E4053" />
                    </BarChart>
                }
                
            </div>
        )
    }
}
export default SkillsChart;