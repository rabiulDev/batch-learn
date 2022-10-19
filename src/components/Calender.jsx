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

const Calender = () => {
  const { fetchData } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState();
  const dispatch = useDispatch();
  const { isLoading, allClasses, isError } = useSelector(
    (state) => state.classEvents
  );
  const calendarEventHandler = (event) => {
    setDate(event.dateStr);
    setOpenModal(true);
  };

  useEffect(() => {
    dispatch(loadClassEventData(fetchData));
  }, []);


  const classEvents = allClasses?.map((data)=>{
    
   return {title: data.title, date: data.class_date} 
  
  
  })
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

      <div className="grid grid-cols-12 gap-6 w-full">
        <div className="col-span-10">
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
            events = {classEvents}
          />

          <SessionModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            date={date}
          />
        </div>

        {/* SIDE INDICATORS  */}

        <div className="col-span-2 w-full">
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
        </div>
      </div>
    </>
  );
};

export default Calender;
