import './App.css';
import AdvancedLineChart from './components/AdvancedLineChart';
import BarChartExample from './components/BarChartExample';
import DynamicLineChart from './components/DynamicLineChart';
import EventBarChart from './components/EventBarChart';
import LineChartExample from './components/LineChartExample';
import PieChartExample from './components/PieChartExample';

function App() {
  return (
    <div>
      <LineChartExample />
      <AdvancedLineChart/>
      <BarChartExample/>
      <PieChartExample/>
      <DynamicLineChart/>
      <EventBarChart/>
    </div>
  );
}

export default App;
