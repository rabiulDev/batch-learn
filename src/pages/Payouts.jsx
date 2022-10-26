import { Button, Pagination, Table } from "antd";
import React from "react";
import DollarSvg from "../components/DollarSvg";

//https://api.staging.batchlearn.com/api/v1/payouts/teacher_cards_analytics/
//https://api.staging.batchlearn.com/api/v1/payouts/payout_list/?page=1&page_size=10

const Payouts = () => {
    const columns = [
        {
          title: "Transaction ID",
          dataIndex: "transaction_id",
        },
        {
          title: "Amount",
          dataIndex: "amount",
        },
        {
          title: "Payout at",
          dataIndex: "payout_at",
        },
      ];
  return (
    <div>
      <div className="flex justify-end mb-7">
        <div className="max-w-[180px] w-full">
          <Button
            type="primary"
            size="large"
            block
            className="!py-[14px] !font-nunito !font-bold !text-base !rounded-[10px] !h-auto"
          >
            Connect Bank
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 justify-between gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-[20px] p-7 payouts-shadow">
          <span className="h-12 w-12 rounded-[10px] flex items-center justify-center pending">
            <DollarSvg />
          </span>
          <span className="text-[20px] text-black font-semibold font-nunito mt-2 block">
            Pending
          </span>
          <span className="text-[24px] text-black font-bold font-nunito block mt-3">
            $ 0
          </span>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-[20px] p-7 payouts-shadow group relative">
          <span className="h-12 w-12 rounded-[10px] flex items-center justify-center available">
            <DollarSvg />
          </span>
          <span className="text-[20px] text-black font-semibold font-nunito mt-2 block">
            Available
          </span>
          <span className="text-[24px] text-black font-bold font-nunito block mt-3">
            $ 0
          </span>
          <button className="text-[15px] text-blue-500 font-semibold font-nunito absolute top-7 right-7 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition duration-300">Withdraw</button>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-[20px] p-7 payouts-shadow">
        <span className="h-12 w-12 rounded-[10px] flex items-center justify-center withdraw">
            <DollarSvg />
          </span>
          <span className="text-[20px] text-black font-semibold font-nunito mt-2 block">
          Withdrawn
          </span>
          <span className="text-[24px] text-black font-bold font-nunito block mt-3">
            $ 0
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-20 mb-[1.5rem]">
        <h2 className="font-nunito text-[1.5rem] leading-[2.046rem] font-extrabold">Payouts History</h2>
      </div>
      <div className="w-full pb-10">
      <Table
        // loading={isLoading}
        columns={columns}
        // dataSource={data}
        pagination={{
          pageSize: 10,
        }}
      />
      </div>
    </div>
  );
};

export default Payouts;
