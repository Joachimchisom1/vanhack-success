import React from 'react';
import successData from '../../assets/success-cases';
const TotalHires = () => (
    <div className="flex-column-center total-hires-container">
        <span className="total-number">{successData.length}</span>
        <span className="total-hires">Total Hired</span>
    </div>
);
export default TotalHires;