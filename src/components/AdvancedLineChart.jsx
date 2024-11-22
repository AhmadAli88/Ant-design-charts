
import { Line } from '@ant-design/charts';

const AdvancedLineChart = () => {
  const data = [
    { year: '2000', value: 30 },
    { year: '2005', value: 50 },
    { year: '2010', value: 90 },
    { year: '2015', value: 100 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
      size: 6,
      shape: 'circle',
      style: { fill: 'white', stroke: '#5B8FF9', lineWidth: 2 },
    },
    lineStyle: {
      lineWidth: 3,
      stroke: 'blue',
    },
    tooltip: {
      showCrosshairs: true,
      shared: true,
    },
  };

  return <Line {...config} />;
};

export default AdvancedLineChart;
