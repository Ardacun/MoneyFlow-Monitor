import React from 'react';
import './Distribution.css';
import { PieChart, Pie } from 'recharts';

export function Distribution() {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    
  return (
    <div className="distribution-container">
        <h2 style={{textAlign: 'center'}}>Distribution</h2>
        <div className="distribution-content">
            <PieChart width={730} height={250}>
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            </PieChart>
        </div>
    </div>
  );
}

