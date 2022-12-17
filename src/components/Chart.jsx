import { Bar } from "react-chartjs-2";
import config from "./config";

const options = {
  scales: {
    x: {
      grid: {
        display: false
      }
    },

    "left-y-axis": {
      type: "linear",
      position: "left",
      grid: {
        borderDash: [8, 6],
        lineWidth: 2
      },
      ticks: {
        maxTicksLimit: 6
      }
    },
    "right-y-axis": {
      type: "linear",
      position: "right",
      grid: {
        display: false
      },
      ticks: {
        callback: (v) => v + "%",
        maxTicksLimit: 6
      }
    }
  }
};

export default function App() {
  return (
    <div className="App">
      <Bar data={config} options={options} />
    </div>
  );
}