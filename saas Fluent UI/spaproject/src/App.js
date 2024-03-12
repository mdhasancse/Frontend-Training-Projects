import ChartApp from './components/ChartApp';
import DonutChartComponent from './components/DonutChartComponent.tsx';
import './App.css';
import Navbar from './components/Navbar.js';
import CardComponent from './components/CardComponent.jsx';
import TopNav from './components/Topnav.jsx';
const App = () => {
  return (
    <div className="App">
      <TopNav />
      <div className="container">
        <div className="leftContent">
          <Navbar />
        </div>
        <div className="centerContent">
          <CardComponent />
        </div>
        <div className="rightContent">
          <DonutChartComponent />
          <ChartApp />
        </div>
      </div>
    </div>
  );
};

export default App;