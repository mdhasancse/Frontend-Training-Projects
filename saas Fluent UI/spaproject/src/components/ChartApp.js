import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { initializeIcons, Slider } from '@fluentui/react';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import './chartApp.css';
// import '@fluentui/react/dist/css/fabric.css';

initializeIcons();

ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
);

function ChartApp() {
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Monthly Subscriptions",
        data: [0, 3, 0],
        backgroundColor: 'skyblue',
        borderColor: 'yellow',
        tension: 0.4,
        fill: true,
        pointStyle: 'rect',
        pointRadius: '3',
        pointBackgroundColor: 'red',
        // pointRadiusColor:'green',
        pointBorderColor: 'yellow',
        // pointBackgroundColor: '#fff',
        pointHoverRadius: "5",
        showLine: false,
        yAxisID: 'y-axis-0',
        xAxisID: 'x-axis-0',
      }
    ]
  });

  const options = {
    scales: {
      y: [
        {
          id: 'y-axis-0',
          type: 'linear',
          position: 'left',
          ticks: {
            min: 0,
            max: 4,
            stepSize: 2,
          },
        },
      ],
      x: [
        {
          id: 'x-axis-0',
          type: 'category',
          ticks: {
            min: "Jan",
            max: "Dec",
            stepSize: 2,
          },
        },
      ],
    },
  };

  return (
    <div className=".card-content h2" style={{ margin: "20px", padding: "12px 12px 12px 12px", boxShadow: "0px 0px 3px", height: "180px", width: "300px", backgroundColor:'white' }}>
      <div className=".card.yearly-card">
        <div className="cards">
          <h4 style={{ marginTop: '2px',marginBottom: '5px', padding: '0px' }}>Monthly Subscriptions</h4>
          <h6 style={{ margin: '0px', padding: '0px' }}>No. of Subscriptions: 3</h6>
          <h6 style={{ margin: '0px', padding: '0px' }}>happened in this Month: 3</h6>
        </div>
        <div className="chart" style={{ width: '250px', height: '145px' }}>
          <Line data={data}  />
        </div>
      </div>
    </div>
  );
}

export default ChartApp;
