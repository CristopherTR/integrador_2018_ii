import React, { Component } from 'react';
import './App.css';
import Combo from './components/graficos/Combo';
import BarChartComponent from './components/graficos/BarChartComponent';
import LineChartComponent from './components/graficos/LineChartComponent';
import PieChartComponent from './components/graficos/PieChartComponent';
import DoughnutChartComponent from './components/graficos/DoughnutChartComponent';
import RadarChartComponent from './components/graficos/RadarChartComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Combo</h1>
        <Combo/>
      <h1>BarChart</h1>
        <BarChartComponent/>
      <h1>Line</h1>
        <LineChartComponent/>
      <h1>PieChart</h1>
        <PieChartComponent/>
      <h1>Doughnut</h1>
        <DoughnutChartComponent/>
      <h1>Radar</h1>
        <RadarChartComponent/>
      </div>
    );
  }
}

export default App;