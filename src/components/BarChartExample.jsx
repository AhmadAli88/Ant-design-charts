import { Bar } from '@ant-design/charts';

const BarChartExample = () => {
  const data = [
    { type: 'Furniture', sales: 38 },
    { type: 'Electronics', sales: 52 },
    { type: 'Grocery', sales: 61 },
  ];

  const config = {
    data,
    xField: 'sales',
    yField: 'type',
    colorField: 'type',
    barWidthRatio: 0.8,
  };

  return <Bar {...config} />;
};

export default BarChartExample;
