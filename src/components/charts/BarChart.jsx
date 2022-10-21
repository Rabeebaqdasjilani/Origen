import Chart from "react-apexcharts";
function BarChart() {
  const state = {
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
        text: "",
        align: "left",
      },
      // grid: {
      //   row: {
      //     colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      //     opacity: 0.5,
      //   },
      // },
      xaxis: {
        categories: [5, 10, 15, 20, 25],
      },
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 23],
      },
    ],
  };
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            //   width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default BarChart;
// className LineCharts extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           height: 350,
//           type: "line",
//           zoom: {
//             enabled: false,
//           },
//         },
//         // dataLabels: {
//         //   enabled: false,
//         // },
//         stroke: {
//           curve: "straight",
//         },
//         title: {
//           text: "SFT Price",
//           align: "left",
//         },
//         // grid: {
//         //   row: {
//         //     colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
//         //     opacity: 0.5,
//         //   },
//         // },
//         xaxis: {
//           categories: [5, 10, 15, 20, 25],
//         },
//       },
//       //   series: [
//       //     {
//       //       name: "Desktops",
//       //       data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
//       //     },
//       //   ],
//       series: [
//         {
//           name: "Series 1",
//           data: [45, 52, 38, 45, 23],
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="line"
//               //   width="100%"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default LineCharts;
