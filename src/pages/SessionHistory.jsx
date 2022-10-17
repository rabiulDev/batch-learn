import { Table } from "antd";
import React from "react";

const SessionHistory = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      width: 150,
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Student",
      dataIndex: "student",
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 150,
    },
  ];

  const data = [];

  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      title: `Edward King ${i}`,
      subject: 32,
      date: `10-10-2022`,
      student: 'Test Student',
      status: 'Test Status',
    });
  }
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 10,
      }}
      // scroll={{
      //   y: 240,
      // }}
    />
  );
};

export default SessionHistory;
