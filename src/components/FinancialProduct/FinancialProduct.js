import React, { useState } from 'react';
import './FinancialProduct.css';
import axios from 'axios';

export function FinancialProduct() {
    // État pour stocker les données de l'action
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchStockData = async (symbol) => {
        setLoading(true);
        setError(null);

        try {
            // URL d'exemple pour une API publique
            const response = await axios.get(`http://localhost:8080/https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`);
            
            // Mettre à jour l'état avec les données reçues
            setStockData(response.data);
        } catch (error) {
            // Gérer les erreurs
            setError('Error fetching stock data: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="financial-product-container">
            <h2>Financial Product</h2>
            <button onClick={() => fetchStockData('AAPL')}>Fetch AAPL Stock Data</button>
            
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {stockData && (
                <div>
                    <h3>Stock Data:</h3>
                    <pre>{JSON.stringify(stockData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
