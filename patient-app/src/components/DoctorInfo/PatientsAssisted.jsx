import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library

const PatientsAssisted = () => {
  const chartRef = useRef(null); // Ref for the chart canvas
  const chartInstance = useRef(null); // Ref for the chart instance

  useEffect(() => {
    const patientsChart = chartRef.current.getContext('2d');
    const activePatients = 30;
    const pastPatients = 70;
    const totalPatients = activePatients + pastPatients;
    const activePercentage = (activePatients / totalPatients) * 100;
    const pastPercentage = (pastPatients / totalPatients) * 100;

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    chartInstance.current = new Chart(patientsChart, {
      type: 'doughnut',
      data: {
        labels: ['Active Patients', 'Past Patients'],
        datasets: [{
          label: 'Patients Assisted',
          data: [activePercentage, pastPercentage],
          backgroundColor: [
            'rgba(0, 98, 230, 0.8)',
            'rgba(51, 174, 255, 0.8)',
          ],
          borderWidth: 0,
        }],
      },
      options: {
        legend: {
          position: 'bottom',
          labels: {
            fontColor: 'white',
          },
        },
      },
    });
  }, []); // Empty dependency array ensures the chart is created only once

  return (
    <div className="patients-info" style={{ textAlign: 'center' }}>
      <h2>Patients Assisted</h2>
      <div className="chart-container">
        <canvas id="patientsChart" ref={chartRef} className="center-canvas"></canvas>
      </div>
    </div>
  );
};

export default PatientsAssisted;
