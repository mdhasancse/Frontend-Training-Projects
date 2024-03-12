import React from 'react';
import {
  DonutChart,
  IChartProps,
  IChartDataPoint,
  IDonutChartProps,
  DataVizPalette,
  getColorFromToken,
} from '@fluentui/react-charting';
import "./DonutChartComponent.css";
 
const monthlyDataPoints = [0, 3, 0];
 
class DonutChartComponent extends React.Component<IDonutChartProps, {}> {
  render() {
    const donutPoints: IChartDataPoint[] = [
      { legend: 'blue', data: 98, color: getColorFromToken(DataVizPalette.color1) },
      { legend: 'white', data: 2, color: 'white' },
    ];
 
    const donutData: IChartProps = {
      chartTitle: 'Yearly Subscriptions',
      chartData: donutPoints,
    };
 
    return (
      <div className="dashboard">
        <div className="card yearly-card" style={{backgroundColor:'white' }}>
          <div className="card-content">
            <h4 style={{ marginTop: '2px',marginBottom: '5px', padding: '0px' }}>Yearly Subscriptions</h4>
            <h6 style={{ margin: '0px', padding: '0px' }}>No.of Subscriptions</h6>
            <h6 style={{ margin: '0px', padding: '0px' }}>happened this year: 3</h6>
          </div>
          <div className="donut" style={{ display: "flex", flexDirection: "row" }}>
            <DonutChart
              className="donut-chart"
              culture={window.navigator.language}
              data={donutData}
              innerRadius={80}
              href={'https://developer.microsoft.com/en-us/'}
              legendsOverflowText={'overflow Items'}
              hideLegend={false}
              height={220}
              width={176}
              valueInsideDonut={95}
            />
          </div>
        </div>
 
      </div>
    );
  }
}
 
export default DonutChartComponent;