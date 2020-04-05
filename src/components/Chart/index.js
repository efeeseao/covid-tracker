import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../services/api';

import './styles.css';

const Chart = ({ data: {confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDeilyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
    
      setDeilyData(await fetchDailyData());
    }
    
    fetchApi();
  }, []);

  const lineChart = (
    dailyData.length ? (<Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Infectados',
          borderColor: '#3333ff',
          fill: true
        }, {
          data: dailyData.map(({ deaths }) => deaths),
          label: 'Mortes',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill: true
        }],
      }}
    />) : null
  );

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infectados', 'Recuperados', 'Mortes'],
          datasets: [{
            label: 'Pessoas',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)'
            ],
            data:[confirmed.value, recovered.value, deaths.value]
          }]
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Estado atual ${country}`}
        }}
      />
    ) : null
  )

  return (
    <div className="chart">
     { country ? barChart : lineChart }
    </div>
  )
}

export default Chart;