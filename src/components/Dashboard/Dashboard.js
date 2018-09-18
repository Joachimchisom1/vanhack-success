import React from "react";
import TotalHires from '../TotalHires/TotalHires';
import YearStats from '../YearStats/YearStats';
import SkillsStats from '../SkillsStats/SkillsStats';
import CityStats from '../CityStats/CityStats';
import AreaStats from '../AreaStats/AreaStats';
const Dashboard = (props) => {
    return (
        <div className="dashboard-container">
          <TotalHires />
          <YearStats />
          <CityStats />
          <AreaStats />
          <SkillsStats />
        </div>
    )
}
export default Dashboard;