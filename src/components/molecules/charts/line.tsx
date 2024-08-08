import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
  BarElement,
  ArcElement,
  LineController,
} from "chart.js";
import {} from "chart.js";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  BarElement,
  ArcElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale
);
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Orders",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: [
        "#FF6384AA",
        "#FFCE56AA",
        "#4BC0C0AA",
        "#9966FFAA",
        "#FF9F40AA",
        "#8B4513AA",
      ],
      borderColor: "#027878",
      barWidth: 10,
      barPercentage: 0.65,
    },
  ],
};

const barChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Orders",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: [
        "#FF6384AA",
        "#FFCE56AA",
        "#4BC0C0AA",
        "#9966FFAA",
        "#FF9F40AA",
        "#8B4513AA",
      ],
      borderColor: "#02787811",
    },
  ],
};

const Orders = () => {
  return (
    <div className="flex flex-col gap-3 shadow-inherit rounded">
      <h2 className="text-xl font-semibold">Orders</h2>
      <Chart
        className="bg-gradient-to-r from-green-50 to-blue-50 text-white rounded-lg p-2 shadow"
        type="line"
        data={data}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />

      <Chart
        type="bar"
        data={data}
        className="bg-gradient-to-r from-green-50 to-blue-50 text-white rounded-lg p-2 shadow"
      />
      <Chart
        type="pie"
        data={barChartData}
        className="bg-gradient-to-r from-green-50 to-blue-50 text-white rounded-lg p-2 shadow max-h-[250px]"
      />
    </div>
  );
};

export default Orders;
