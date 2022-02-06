import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Public Sale",
    "Seed",
    "Advisor",
    "Marketing",
    "Team",
    "Ecosystem",
    "Treasury",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [
        5000000, 15000000, 5000000, 10000000, 25000000, 30000000, 10000000,
      ],
      backgroundColor: [
        "rgba(46, 204, 113,1.0)",
        "rgba(52, 152, 219,1.0)",
        "rgba(241, 196, 15,1.0)",
        "rgba(52, 73, 94,1.0)",
        "rgba(155, 89, 182,1.0)",
        "rgba(162, 155, 254,1.0)",
        "rgba(231, 76, 60,1.0)",
      ],
      borderWidth: 1,
      borderColor: "#000",
    },
  ],
};

export default function PolarChart() {
  return <Doughnut data={data} />;
}
