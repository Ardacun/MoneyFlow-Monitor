import React from 'react';
import { useState } from 'react';
import './List.css';

// Example data for each category
const data = {
    crypto: [
        { name: 'Bitcoin', symbol: 'BTC', price: '$50,000' },
        { name: 'Ethereum', symbol: 'ETH', price: '$4,000' }
    ],
    stocks: [
        { name: 'Apple', symbol: 'AAPL', price: '$150' },
        { name: 'Tesla', symbol: 'TSLA', price: '$700' }
    ],
    etfs: [
        { name: 'SPDR S&P 500', symbol: 'SPY', price: '$450' },
        { name: 'Vanguard Total Stock Market', symbol: 'VTI', price: '$230' }
    ],
    cash: [
        { name: 'US Dollar', symbol: 'USD', price: '$1' },
        { name: 'Euro', symbol: 'EUR', price: '$1.18' }
    ]
};

export function List() {
    const [activeTab, setActiveTab] = useState('crypto'); // Set default tab

    const renderTable = (category) => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data[category].map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.symbol}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div style={{marginBottom: '20px'}}>
            <h2 style={{textAlign: 'center'}}>List</h2>
            <div className="tabs">
                <button onClick={() => setActiveTab('crypto')}>Crypto</button>
                <button onClick={() => setActiveTab('stocks')}>Stocks</button>
                <button onClick={() => setActiveTab('etfs')}>ETFs</button>
                <button onClick={() => setActiveTab('cash')}>Cash</button>
            </div>
            <div className="tab-content">
                {renderTable(activeTab)}
            </div>
        </div>
    );
}

