import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [apiData, setApiData] = useState('Waiting for API response...');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Test API connection when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/test');
        console.log('API Response:', response.data);
        setApiData(JSON.stringify(response.data));
      } catch (err) {
        console.error('Error fetching from API:', err);
        setError('Failed to connect to the backend API. Check console for details.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="test-component">
      <h2>API Test Component</h2>
      <p>This component tests the connection to the backend API.</p>
      
      {error ? (
        <div className="error-message">
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      ) : (
        <div className="api-response">
          <h3>API Response:</h3>
          <pre>{apiData}</pre>
        </div>
      )}
    </div>
  );
};

export default Test;
