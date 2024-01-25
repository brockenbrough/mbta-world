import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/alerts?sort=banner&filter%5Bactivity%5D=BOARD%2CEXIT%2CRIDE',
      );
      setAlerts(result.data.data);
    }

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Alerts!</h1>
      {alerts.map((alert, index) => (
        <Card
          key={index}
          bg="info"
          text="white"
          className="mb-2"
          style={{ width: "30rem" }}
        >
          <Card.Body>
            <Card.Title>Alert</Card.Title>
            <Card.Text>{alert.attributes.header} </Card.Text>
            <Card.Text>{alert.attributes.description} </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Alerts;
