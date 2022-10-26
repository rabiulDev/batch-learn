import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import SessionModal from "./SessionModal";
import { useDispatch, useSelector } from "react-redux";
import { loadClassEventData } from "../app/features/classEvents";
import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { Checkbox, Spin } from "antd";

const Calender = () => {
  const navigate = useNavigate();
  const { fetchData } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState();
  const dispatch = useDispatch();
  const { allClasses } = useSelector((state) => state.classEvents);
  const { subjects } = useSelector((state) => state.subjects);
  const { school } = useSelector((state) => state.schools);

  const {isLoading,  role } = useSelector((state) => state.accout);

  const calendarEventHandler = (event) => {
    setDate(event.dateStr);
    setOpenModal(true);
  };
  useEffect(() => {
   dispatch(loadClassEventData(fetchData));
  }, []);

  const handleEventClick = ({ event }) => {
    navigate(`classroom/${event._def.publicId}`);
  };
  const classEvents = allClasses?.map((data) => {
    return { id: data.id, title: data.title, date: data.class_date };
  });


if(isLoading){
  return <div className="h-[70vh] w-full flex items-center justify-center">
  <Spin />
</div>
}
  return (

    <>
      {/* DASHBOARD BREADCUMBER  */}
      <div className="mb-9 flex items-center gap-2.5">
        <span>
          <svg
            fill="none"
            height="20"
            viewBox="0 0 22 22"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M2.75 5.95833C2.75 3.55189 2.77577 2.75 5.95833 2.75C9.1409 2.75 9.16667 3.55189 9.16667 5.95833C9.16667 8.36478 9.17682 9.16667 5.95833 9.16667C2.73985 9.16667 2.75 8.36478 2.75 5.95833Z"
              fillRule="evenodd"
              stroke="#3f8cfe"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>{" "}
            <path
              clipRule="evenodd"
              d="M12.8335 5.95833C12.8335 3.55189 12.8593 2.75 16.0418 2.75C19.2244 2.75 19.2502 3.55189 19.2502 5.95833C19.2502 8.36478 19.2603 9.16667 16.0418 9.16667C12.8233 9.16667 12.8335 8.36478 12.8335 5.95833Z"
              fillRule="evenodd"
              stroke="#3f8cfe"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>{" "}
            <path
              clipRule="evenodd"
              d="M2.75 16.0416C2.75 13.6351 2.77577 12.8333 5.95833 12.8333C9.1409 12.8333 9.16667 13.6351 9.16667 16.0416C9.16667 18.448 9.17682 19.2499 5.95833 19.2499C2.73985 19.2499 2.75 18.448 2.75 16.0416Z"
              fillRule="evenodd"
              stroke="#3f8cfe"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>{" "}
            <path
              clipRule="evenodd"
              d="M12.8335 16.0416C12.8335 13.6351 12.8593 12.8333 16.0418 12.8333C19.2244 12.8333 19.2502 13.6351 19.2502 16.0416C19.2502 18.448 19.2603 19.2499 16.0418 19.2499C12.8233 19.2499 12.8335 18.448 12.8335 16.0416Z"
              fillRule="evenodd"
              stroke="#3f8cfe"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
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
          Dashboard
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 w-full pb-5">
        {role === "Student" ? <div className="col-span-10">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            initialView="timeGridWeek"
            headerToolbar={{
              left: "today prev,next",
              center: "title",
              right: "dayGridMonth timeGridWeek timeGridDay listWeek",
            }}
            buttonText={{
              today: "Today",
              month: "Month",
              week: "Week",
              day: "Day",
              list: "List",
            }}
            dateClick={(event) => calendarEventHandler(event)}
            events={classEvents}
            eventColor="#FFBF00"
            eventClick={(e) => handleEventClick(e)}
          />

          <SessionModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            date={date}
          />
        </div>: <div className="col-span-9">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            initialView="timeGridWeek"
            headerToolbar={{
              left: "today prev,next",
              center: "title",
              right: "dayGridMonth timeGridWeek timeGridDay listWeek",
            }}
            buttonText={{
              today: "Today",
              month: "Month",
              week: "Week",
              day: "Day",
              list: "List",
            }}
            events={classEvents}
            eventColor="#FFBF00"
            eventClick={(e) => handleEventClick(e)}
          />
        </div>}

        {/* SIDE INDICATORS  */}

        <div className={role === "Teacher" ? "col-span-3" : "col-span-2"}>
          <div className="bg-white rounded-[8px] border border-gray-200">
            <div className="flex items-center justify-between px-[1.875rem] py-3 border-b border-gray-200">
              <div className="text-[15px] leading-[25px] text-black font-bold text-center font-nunito">
                Indicators
              </div>
            </div>
            <ul className="h-52">
              <li className=" flex items-center gap-2.5 text-base text-gray-300 py-2.5 px-[1.875rem] cursor-pointer font-semibold">
                <div className=" h-4 w-4 bg-green-500 rounded-[4px]"></div>
                <h1 className="text-base font-semibold font-nunito m-0">
                  Accepted
                </h1>
              </li>
              <li className=" flex items-center gap-2.5 text-base text-gray-300 py-2.5 px-[1.875rem] cursor-pointer font-semibold">
                <div className=" h-4 w-4 bg-yellow-400 rounded-[4px]"></div>
                <h1 className="text-base font-semibold font-nunito m-0">
                  Pending
                </h1>
              </li>
              <li className=" flex items-center gap-2.5 text-base text-gray-300 py-2.5 px-[1.875rem] cursor-pointer font-semibold">
                <div className=" h-4 w-4 bg-blue-500 rounded-[4px]"></div>
                <h1 className="text-base font-semibold font-nunito m-0">
                  On going
                </h1>
              </li>
              <li className=" flex items-center gap-2.5 text-base text-gray-300 py-2.5 px-[1.875rem] cursor-pointer font-semibold">
                <div className=" h-4 w-4 bg-red-400 rounded-[4px]"></div>
                <h1 className="text-base font-semibold font-nunito m-0">
                  Ended
                </h1>
              </li>
            </ul>
          </div>
          {/* TEACHER OPTIONS */}
          {role && role === "Teacher" && (
            <div>
              <div className="flex items-center gap-1.5 cursor-pointer mt-5 justify-end">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2045 18.3333C9.07531 18.3333 7.97448 18.3208 6.88531 18.2983C5.49198 18.2708 4.52781 17.3674 4.37031 15.9408C4.10781 13.5741 3.65865 7.99575 3.65448 7.93992C3.62615 7.59575 3.88281 7.29409 4.22698 7.26659C4.56615 7.25742 4.87281 7.49575 4.90031 7.83909C4.90448 7.89575 5.35281 13.4549 5.61281 15.8033C5.70198 16.6141 6.13948 17.0324 6.91115 17.0483C8.99448 17.0924 11.1203 17.0949 13.412 17.0533C14.232 17.0374 14.6753 16.6274 14.767 15.7974C15.0253 13.4691 15.4753 7.89575 15.4803 7.83909C15.5078 7.49575 15.812 7.25575 16.1528 7.26659C16.497 7.29492 16.7536 7.59575 16.7261 7.93992C16.7211 7.99659 16.2695 13.5891 16.0095 15.9349C15.8478 17.3908 14.8861 18.2766 13.4345 18.3033C12.3236 18.3224 11.252 18.3333 10.2045 18.3333Z"
                      fill="#95A3BD"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.2567 5.82434H3.125C2.78 5.82434 2.5 5.54434 2.5 5.19934C2.5 4.85434 2.78 4.57434 3.125 4.57434H17.2567C17.6017 4.57434 17.8817 4.85434 17.8817 5.19934C17.8817 5.54434 17.6017 5.82434 17.2567 5.82434Z"
                      fill="#95A3BD"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5322 5.82437C13.5839 5.82437 12.7605 5.14854 12.5739 4.21854L12.3714 3.2052C12.3289 3.05104 12.153 2.91687 11.953 2.91687H8.42552C8.22552 2.91687 8.04968 3.05104 7.99885 3.24354L7.80468 4.21854C7.61885 5.14854 6.79468 5.82437 5.84635 5.82437C5.50135 5.82437 5.22135 5.54437 5.22135 5.19937C5.22135 4.85437 5.50135 4.57437 5.84635 4.57437C6.20135 4.57437 6.50968 4.32104 6.57968 3.9727L6.78218 2.95937C6.98802 2.1827 7.66052 1.66687 8.42552 1.66687H11.953C12.718 1.66687 13.3905 2.1827 13.588 2.92187L13.7997 3.9727C13.8689 4.32104 14.1772 4.57437 14.5322 4.57437C14.8772 4.57437 15.1572 4.85437 15.1572 5.19937C15.1572 5.54437 14.8772 5.82437 14.5322 5.82437Z"
                      fill="#95A3BD"
                    ></path>
                  </svg>
                </span>
                <span className="text-base font-nunito font-medium text-gray-400">
                  Clear
                </span>
              </div>

              <div className="bg-white rounded-[8px] border border-gray-200 mt-5">
                <div className="flex items-center justify-between px-[1.875rem] py-3 border-b border-gray-200">
                  <div className="text-[15px] leading-[25px] text-black font-bold text-center font-nunito">
                    Subjects
                  </div>
                </div>
                <ul className="h-64 px-[1.875rem] pt-4">
                  <Checkbox.Group>
                    <div className="flex flex-col gap-5 mt-1">
                      {subjects?.map((item) => (
                        <Checkbox
                          key={item.id}
                          value={item.id}
                          className="!m-0 !text-gray-500 !text-base !font-semibold !font-nunito"
                        >
                          {item.name}
                        </Checkbox>
                      ))}
                    </div>
                  </Checkbox.Group>
                </ul>
              </div>

              <div className="bg-white rounded-[8px] border border-gray-200 mt-5">
                <div className="flex items-center justify-between px-[1.875rem] py-3 border-b border-gray-200">
                  <div className="text-[15px] leading-[25px] text-black font-bold text-center font-nunito">
                    Schools
                  </div>
                </div>
                <ul className="h-64 px-[1.875rem] pt-4">
                  <Checkbox.Group>
                    <div className="flex flex-col gap-5">
                      {school?.map((item) => (
                        <Checkbox
                          key={item.id}
                          value={item.id}
                          className="!m-0 !text-gray-500 !text-base !font-semibold !font-nunito"
                        >
                          {item.name}
                        </Checkbox>
                      ))}
                    </div>
                  </Checkbox.Group>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Calender;
