import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend
} from "chart.js"

function Chart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend
  )

  const data = {
    labels: ["2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01"],
    datasets: [
      {
        label: "Книга",
        data: [62017, 52105, 48081, 49345],
        borderColor: "red",
        backgroundColor: "white"
      }
    ]
  }
  return (
    <Line
      data={data}
      options={{
        responsive: true
      }}
    />
  )
}

export default Chart
