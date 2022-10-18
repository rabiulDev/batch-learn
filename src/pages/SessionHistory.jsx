import { Table } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadHistoryData } from "../app/features/sessionHistory";
import useAuth from "../auth/useAuth";

const SessionHistory = () => {
  const { fetchData } = useAuth();
  const dispatch = useDispatch();
  const { isLoading, allHistory, isError } = useSelector(
    (state) => state.sessionHistory
  );

  console.log(allHistory.results);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      width: 200,
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
      width: 200,
    },
  ];

  const data = allHistory?.results?.map((item) => {
    return {
      key: item.id,
      title: item.title,
      subject: item.subject.name,
      date: `${moment(item.class_date).format("YYYY-MM-DD")} ${moment(
        item.class_date
      ).format("hh:mm A")}`,
      student: item.student_count,
      status: item.status,
    };
  });

  useEffect(() => {
    dispatch(loadHistoryData(fetchData));
  }, []);

  return (
    <>
      <div className="mb-9 flex items-center gap-2.5">
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2281_16671)">
              <path
                d="M10 0C7.53792 0.00175531 5.16344 0.913852 3.33333 2.56083V0.833333C3.33333 0.61232 3.24554 0.400358 3.08926 0.244078C2.93298 0.0877974 2.72101 0 2.5 0C2.27899 0 2.06702 0.0877974 1.91074 0.244078C1.75446 0.400358 1.66667 0.61232 1.66667 0.833333V3.33333C1.66667 3.99637 1.93006 4.63226 2.3989 5.1011C2.86774 5.56994 3.50363 5.83333 4.16667 5.83333H6.66667C6.88768 5.83333 7.09964 5.74554 7.25592 5.58926C7.4122 5.43298 7.5 5.22101 7.5 5C7.5 4.77899 7.4122 4.56703 7.25592 4.41074C7.09964 4.25446 6.88768 4.16667 6.66667 4.16667H4.16667C4.13856 4.1625 4.11074 4.15666 4.08333 4.14917C5.44127 2.78152 7.23177 1.92756 9.14922 1.73305C11.0667 1.53855 12.9922 2.01555 14.5971 3.08263C16.202 4.14972 17.3868 5.74075 17.9493 7.58413C18.5118 9.42751 18.4171 11.409 17.6813 13.1903C16.9455 14.9716 15.6144 16.4423 13.915 17.3515C12.2156 18.2606 10.2533 18.5517 8.36318 18.1752C6.47303 17.7986 4.77216 16.7778 3.55088 15.2868C2.32961 13.7959 1.66364 11.9273 1.66667 10C1.66667 9.77899 1.57887 9.56703 1.42259 9.41074C1.26631 9.25446 1.05435 9.16667 0.833333 9.16667C0.61232 9.16667 0.400358 9.25446 0.244078 9.41074C0.0877974 9.56703 0 9.77899 0 10C0 11.9778 0.58649 13.9112 1.6853 15.5557C2.78412 17.2002 4.3459 18.4819 6.17317 19.2388C8.00043 19.9957 10.0111 20.1937 11.9509 19.8079C13.8907 19.422 15.6725 18.4696 17.0711 17.0711C18.4696 15.6725 19.422 13.8907 19.8079 11.9509C20.1937 10.0111 19.9957 8.00043 19.2388 6.17317C18.4819 4.3459 17.2002 2.78412 15.5557 1.6853C13.9112 0.58649 11.9778 0 10 0V0Z"
                fill="#3f8cfe"
              ></path>{" "}
              <path
                d="M10 5C9.77899 5 9.56703 5.0878 9.41075 5.24408C9.25447 5.40036 9.16667 5.61232 9.16667 5.83333V10C9.16672 10.221 9.25454 10.4329 9.41083 10.5892L11.9108 13.0892C12.068 13.241 12.2785 13.325 12.497 13.3231C12.7155 13.3212 12.9245 13.2335 13.079 13.079C13.2335 12.9245 13.3212 12.7155 13.3231 12.497C13.325 12.2785 13.241 12.068 13.0892 11.9108L10.8333 9.655V5.83333C10.8333 5.61232 10.7455 5.40036 10.5893 5.24408C10.433 5.0878 10.221 5 10 5Z"
                fill="#3f8cfe"
              ></path>
            </g>{" "}
            <defs>
              <clipPath id="clip0_2281_16671">
                <rect width="20" height="20" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </span>
        <span>
          <svg
            fill="none"
            height="1"
            viewBox="0 0 12 1"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line stroke="#8391A9" x2="12" y1="0.5" y2="0.5"></line>
          </svg>
        </span>
        <p className="m-0 font-semibold font-nunito text-[14px] text-gray-400 leading-6">
          Session History
        </p>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 10,
        }}
      />
    </>
  );
};

export default SessionHistory;
