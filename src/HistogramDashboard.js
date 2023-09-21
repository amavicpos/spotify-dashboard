import React from 'react';
import Plot from 'react-plotly.js';

const HistogramDashboard = () => {
  // Sample data for the histogram
  const data = [
    {
      x: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5],
      type: 'histogram',
      marker: { color: 'blue' },
    },
  ];

  // Layout for the histogram
  const layout = {
    title: 'Histogram Example',
    xaxis: { title: 'Value' },
    yaxis: { title: 'Frequency' },
  };

  return (
    <div className="dashboard">
      <h1>Simple Histogram Dashboard</h1>
      <div className="plot-container">
        <Plot data={data} layout={layout} />
      </div>
    </div>
  );
};

export default HistogramDashboard;
