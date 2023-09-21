import React from 'react';
import Plot from 'react-plotly.js';
import pop from './spotify.js';

const HistogramDashboard = () => {
  // Sample data for the histogram
  const data = [
    {
      x: pop,
      type: 'histogram',
      marker: { color: 'blue' }
    },
  ];

  // Layout for the histogram
  const layout = {
    title: 'Number of songs with each popularity',
    xaxis: { title: 'Popularity' },
    yaxis: { title: 'Number of songs' },
  };

  return (
    <div className="dashboard">
      <h1>Popularity of the 50 most listened songs in the past 6 months</h1>
      <div className="plot-container">
        <Plot data={data} layout={layout} />
      </div>
    </div>
  );
};

export default HistogramDashboard;
