import React from "react";
import { DatePicker, Space } from "antd";

const onChange = (date, dateString) => {
  console.log(date, dateString);
  const dateObject = new Date(dateString);
  console.log(dateObject);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  console.log(formattedDate);
};

const DatePciker = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
  </Space>
);

export default DatePciker;
