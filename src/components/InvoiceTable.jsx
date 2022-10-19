import { Table } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadInvoiceData } from "../app/features/invoicesHistory";
import useAuth from "../auth/useAuth";

const InvoiceTable = () => {
  const dispatch = useDispatch();
  const { fetchData } = useAuth();
  const { isLoading, allInvoices, isError } = useSelector(
    (state) => state.invoiceHistory
  );
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      width: 300,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      width: 300,
    },
    {
      title: "Paid At",
      dataIndex: "paidAt",
      width: 700,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 400,
    },
  ];
  useEffect(() => {
    dispatch(loadInvoiceData(fetchData));
  }, []);

  const data = allInvoices?.results?.map((item) => {
    return {
      key: item.djstripe_id,
      title: item.metadata.title,
      amount: item.amount,
      paidAt: `${moment(item.created).format("YYYY-MM-DD")} ${moment(
        item.created
      ).format("hh:mm A")}`,
      status: item.status,
    };
  });

  return (
    <Table
      loading={isLoading}
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 10,
      }}
    />
  );
};

export default InvoiceTable;
