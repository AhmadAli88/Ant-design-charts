//You can dynamically fetch and update chart data using React hooks.

import { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DynamicLineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const newData = [
        { year: '2021', value: Math.random() * 100 },
        { year: '2022', value: Math.random() * 100 },
        { year: '2023', value: Math.random() * 100 },
      ];
      setData(newData);
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    smooth: true,
  };

  return <Line {...config} />;
};

export default DynamicLineChart;
