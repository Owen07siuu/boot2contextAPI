import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Articles = () => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://api.sampleapis.com/wines/reds')
      .then((response) => setWines(response.data))
      .catch((error) => console.error('Error fetching the wine data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Artículos</h1>
      <p>Tenemos estos deliciosos vinos para ti, que esperas para pedir el tuyo?</p>

      <div className="row">
        {wines.map((wine) => (
          <div key={wine.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={wine.image}
                className="card-img-top wine-image"
                alt={wine.wine}
              />
              <div className="card-body">
                <h5 className="card-title">{wine.wine}</h5>
                <p className="card-text">
                  Precio: $300.000
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
