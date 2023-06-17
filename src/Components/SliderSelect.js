import React, { useState } from "react";
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = ({ data, setData, formattedData, setFormattedData }) => {
  const bank_limit = 5000000;
  const formattedBankLimit = bank_limit.toLocaleString("en-US");

  return (
    <div>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            homeValue: value.toFixed(0),
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
          })
          setFormattedData({
            formattedHomeValue: value.toLocaleString("en-US"),
            formattedDownPayment: (0.2 * value).toLocaleString("en-US"),
            formattedLoanAmount: (0.8 * value).toLocaleString("en-US"),
          })
        }}
        defaultValue={data.homeValue}
        min={100000}
        max={bank_limit}
        label="Property Value"
        unit="$"
        amount={data.homeValue}
        value={data.homeValue}
        steps={50000}
        formattedAmount={formattedData.formattedHomeValue}
        formattedMax={formattedBankLimit} />


      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.homeValue - value).toFixed(0),
          })
          setFormattedData({
            ...formattedData,
            formattedDownPayment: value.toLocaleString("en-US"),
            formattedLoanAmount: (data.homeValue - value).toLocaleString("en-US"),
          })
        }}
        defaultValue={data.downPayment}
        min={10000}
        max={data.homeValue}
        label="Down Payment"
        unit="$"
        amount={data.downPayment}
        value={data.downPayment}
        steps={10000}
        formattedAmount={formattedData.formattedDownPayment}
        formattedMax={formattedData.formattedHomeValue} />


      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0),
          })
          setFormattedData({
            ...formattedData,
            formattedLoanAmount: value.toLocaleString("en-US"),
            formattedDownPayment: (data.homeValue - value).toLocaleString("en-US"),
          })
        }}
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        label="Load Payment"
        unit="$"
        amount={data.loanAmount}
        value={data.loanAmount}
        steps={10000}
        formattedAmount={formattedData.formattedLoanAmount}
        formattedMax={formattedData.formattedHomeValue} />


      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            interestRate: value,
          })
        }}
        defaultValue={data.interestRate}
        min={2}
        max={18}
        label="Interest Rate"
        percent = "%"
        amount={data.interestRate}
        value={data.interestRate}
        steps={0.5}
        formattedAmount={data.interestRate}
        formattedMax={18} />
    </div>
  );
}

export default SliderSelect;
