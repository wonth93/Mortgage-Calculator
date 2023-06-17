import React from "react";
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 5000000;
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
        }}
        defaultValue={data.homeValue}
        min={100000}
        max={bank_limit}
        label="Property Value"
        unit="$"
        amount={data.homeValue}
        value={data.homeValue}
        steps={50000} />
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.homeValue - value).toFixed(0),
          })
        }}
        defaultValue={data.downPayment}
        min={10000}
        max={data.homeValue}
        label="Down Payment"
        unit="$"
        amount={data.downPayment}
        value={data.downPayment}
        steps={10000} />
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0),
          })
        }}
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        label="Load Payment"
        unit="$"
        amount={data.loanAmount}
        value={data.loanAmount}
        steps={10000} />
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
        unit="%"
        amount={data.interestRate}
        value={data.interestRate}
        steps={0.5} />
    </div>
  );
}

export default SliderSelect;
