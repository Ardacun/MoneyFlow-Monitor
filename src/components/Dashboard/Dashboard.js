import React from 'react';
import './Dashboard.css';
import { Total } from "../Total/Total";
import { Distribution } from '../Distribution/Distribution';
import { List } from '../List/List';

export function Dashboard() {
  return (
    <div className="dashboard-container">
        <h2>Dashboard</h2>
        <div className="dashboard-content">
            <Total/>
            <Distribution/>
            <List/>
        </div>
    </div>
  );
}

