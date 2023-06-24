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
    labels: ['Principle', 'Interest'],
    datasets: [{
      label: 'Ratio of Principle and Interest',
      data: [homeValue, totalInterestGenerated],
      backgroundColor: ['rgba(160, 160, 160, 0.2)', 'rgba(255, 0, 0, 0.1)'],
      borderColor: ['rgba(160, 160, 160, 0.2)', 'rgba(255, 0, 0, 0.1)'],
    }]
  }

  return (
    <div>
      <Typography variant="h6" textAlign="center">Your Monthly Paypment: $ {monthlyPayment.toFixed(2).toLocaleString("en-US")}</Typography>
      <Pie data={pieData} />
    </div>
  );
}

export default Result;
