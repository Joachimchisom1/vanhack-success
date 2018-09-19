import React from "react";
import TotalHires from '../TotalHires/TotalHires';
import YearStats from '../YearStats/YearStats';
import SkillsStats from '../SkillsStats/SkillsStats';
import CityStats from '../CityStats/CityStats';
import AreaStats from '../AreaStats/AreaStats';
import SuccessListTable from "../SuccessList/SuccessList";
const Dashboard = (props) => {
    return (
        <div className="dashboard-container">
        <div className="left-side">
            <SuccessListTable />
        </div>
        <div className="right-side">
          <TotalHires />
          <YearStats />
          <CityStats />
          <AreaStats />
          <SkillsStats />
        </div>
        </div>
    )
}
export default Dashboard;