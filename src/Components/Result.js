import React from "react";
import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

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
      backgroundColor: ['rgb(102, 102, 255)', 'rgba(0, 0, 204, 0.5)'],
      borderColor: ['rgb(102, 102, 255)', 'rgba(0, 0, 204, 0.1)']
    }]
  }

  return (
    <div>
      <Stack direction='row' justifyContent='center'>
        <Typography variant="h6">
          Your Estimated Monthly Paypment: $
        </Typography>
        <Typography variant="h6" style={{ textDecoration: 'underline' }}>{monthlyPayment.toFixed(2).toLocaleString("en-US")}</Typography>
      </Stack>
      <Pie data={pieData} />
    </div>
  );
}

export default Result;
