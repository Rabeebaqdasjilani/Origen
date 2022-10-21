import React, { Component } from "react";
import Chart from "react-apexcharts";
// {
//   chart: {
//     height: 380,
//     width: "100%",
//     type: "line"
//   },
//   series: [
//     {
//       name: "Series 1",
//       data: [45, 52, 38, 45, 19, 33]
//     }
//   ],
//   xaxis: {
//     categories: [
//       "01 Jan",
//       "02 Jan",
//       "03 Jan",
//       "04 Jan",
//       "05 Jan",
//       "06 Jan"
//     ]
//   }
// };
class LineCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 350,
          type: "line",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        // dataLabels: {
        //   enabled: false,
        // },
        stroke: {
          curve: "straight",
        },
        title: {
          text: props.title,
          align: "left",
        },
        // grid: {
        //   row: {
        //     colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        //     opacity: 0.5,
        //   },
        // },
        xaxis: {
          categories: props.categories,
        },
      },
      //   series: [
      //     {
      //       name: "Desktops",
      //       data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      //     },
      //   ],
      series: [
        {
          name: "Series 1",
          data: props.data,
        },
      ],
    };
    console.log(props);
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              //   width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineCharts;
