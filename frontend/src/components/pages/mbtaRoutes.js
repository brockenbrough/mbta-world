import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Routes() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/routes',
      );
      setAlerts(result.data.data);
    }

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Routes!</h1>
      {alerts.map((data, index) => (
        <Card
          key={index}
          bg="primary"
          text="white"
          className="mb-2"
          style={{ width: "30rem" }}
        >
          <Card.Body>
            <Card.Title>Route</Card.Title>
            <Card.Text>{data.attributes.long_name} </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Routes;
