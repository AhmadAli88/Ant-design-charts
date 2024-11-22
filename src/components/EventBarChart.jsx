import { Bar } from '@ant-design/charts';

const EventBarChart = () => {
  const data = [
    { type: 'Furniture', sales: 38 },
    { type: 'Electronics', sales: 52 },
    { type: 'Grocery', sales: 61 },
  ];

  const config = {
    data,
    xField: 'sales',
    yField: 'type',
    onBarClick: (event) => {
      alert(`Clicked on ${event.data.type}`);
    },
  };

  return <Bar {...config} />;
};

export default EventBarChart;
