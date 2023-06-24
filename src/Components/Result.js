import React from "react";
import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { yellow } from "@mui/material/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homeValue, loanAmount, loanTerm, interestRate } = data;
  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = (interestRate * 0.01) / 12;
  const monthlyPayment = (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1);
  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;
  
  const pieData = {
    labels: ['Red', 'Blue', 'yellow'],
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
    }]
  }

  return (
    <div>
      <Pie data={pieData} />
    </div>
  );
}

export default Result;
