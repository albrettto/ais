// import { Line } from "react-chartjs-2"
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Legend
// } from "chart.js"
import React from "react"
import { CChart } from '@coreui/react-chartjs'

function Chart() {
  // ChartJS.register(
  //   CategoryScale,
  //   LinearScale,
  //   PointElement,
  //   LineElement,
  //   Legend
  // )

  // const data = {
  //   labels: ["2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01"],
  //   datasets: [
  //     {
  //       label: "Книга",
  //       data: [62017, 52105, 48081, 49345],
  //       borderColor: "red",
  //       backgroundColor: "white"
  //     }
  //   ]
  // }
  return (
    // <Line
    //   data={data}
    //   options={{
    //     responsive: true
    //   }}
    // />
    <div>
      <CChart
        type="bar"
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'GitHub Commits',
              backgroundColor: '#f87979',
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
            },
          ],
        }}
        labels="months"
      />
      <CChart
        type="line" 
        data={{
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgba(220, 220, 220, 0.2)",
              borderColor: "rgba(220, 220, 220, 1)",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
            },
            {
              label: "My Second dataset",
              backgroundColor: "rgba(151, 187, 205, 0.2)",
              borderColor: "rgba(151, 187, 205, 1)",
              pointBackgroundColor: "rgba(151, 187, 205, 1)",
              pointBorderColor: "#fff",
              data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
            },
          ],
        }}
      />
    </div>
  )
}

export default Chart
