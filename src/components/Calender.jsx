import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import SessionModal from "./SessionModal";
import { useDispatch, useSelector } from "react-redux";
// import { loadClassEventData } from "../app/features/classEvents";
import { setFilteredSubject } from "../app/features/profileInfo";
import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { Checkbox, Spin } from "antd";
import moment from "moment/moment";

const Calender = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fetchData } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState();
  const { subjects } = useSelector((state) => state.subjects);
  const { school } = useSelector((state) => state.schools);
  const [allClasses, setAllClasses] = useState([]);
  const { isLoading, role } = useSelector((state) => state.accout);
  const { filteredSubject } = useSelector((state) => state.profileInfo);
  const [filteredSchool, setFilteredSchool] = useState([]);
  const [maxMinDate, setMaxMinTime] = useState()
  const calendarEventHandler = (event) => {
    setDate(event.dateStr);
    setOpenModal(true);
  };
  const handleEventContent = (arg) => {
    const event = arg.event;
    const customEvent = `<div class="flex items-center gap-2 p-1.5">
        <span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
             
              id="mask0_1355_12859"
              maskUnits="userSpaceOnUse"
              x="1"
              y="12"
              width="15"
              height="8"
              style={{maskType: "alpha"}}
            >
              <path
                
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.83347 12.7939H15.7519V19.3019H1.83347V12.7939Z"
                fill="white"
              ></path>
            </mask>
            <g  mask="url(#mask0_1355_12859)">
              <path
                
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.79266 14.1689C6.24524 14.1689 3.20832 14.4962 3.20832 16.0591C3.20832 17.2984 5.08749 17.9273 8.79266 17.9273C12.4978 17.9273 14.377 17.292 14.377 16.0408C14.377 14.7987 12.4978 14.1689 8.79266 14.1689ZM8.79255 19.3023C6.88955 19.3023 1.83322 19.3023 1.83322 16.0591C1.83322 12.7939 7.07105 12.7939 8.79255 12.7939C11.78 12.7939 15.7519 13.1304 15.7519 16.0408C15.7519 19.3023 10.5141 19.3023 8.79255 19.3023Z"
                fill="#FFFFFF"
              ></path>
            </g>
            <path
            
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.79261 3.20835C6.9547 3.20835 5.45962 4.70343 5.45962 6.54043C5.45962 8.37743 6.9547 9.87252 8.79261 9.87252H8.82103C9.7047 9.86885 10.537 9.52143 11.1613 8.89168C11.7864 8.26377 12.1284 7.42868 12.1247 6.54318C12.1247 4.70343 10.6296 3.20835 8.79261 3.20835ZM8.79256 11.2475C6.19656 11.2475 4.08456 9.13554 4.08456 6.54046C4.08456 3.94537 6.19656 1.83337 8.79256 1.83337C11.3876 1.83337 13.4996 3.94537 13.4996 6.54046C13.5051 7.79079 13.0202 8.97146 12.1366 9.86062C11.2547 10.7507 10.0768 11.243 8.82373 11.2475H8.79256Z"
              fill="#FFFFFF"
            ></path>
            <path
           
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.1091 10.2042C14.7717 10.2042 14.4775 9.95582 14.4289 9.61207C14.3766 9.23624 14.6379 8.88791 15.0137 8.83566C16.1577 8.67524 17.0212 7.68249 17.0231 6.52566C17.0231 5.37616 16.1999 4.40632 15.0678 4.22116C14.6929 4.15882 14.439 3.80591 14.5004 3.43099C14.5618 3.05607 14.9166 2.80399 15.2896 2.86357C17.0909 3.15874 18.3981 4.69966 18.3981 6.52657C18.3944 8.36449 17.0221 9.94299 15.2053 10.1978C15.1732 10.2024 15.1411 10.2042 15.1091 10.2042Z"
              fill="#FFFFFF"
            ></path>{" "}
            <mask
           
              id="mask1_1355_12859"
              maskUnits="userSpaceOnUse"
              x="16"
              y="12"
              width="5"
              height="5"
              style={{maskType: "alpha"}}
            >
              <path
              
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.3582 12.3599H20.1474V16.9226H16.3582V12.3599Z"
                fill="white"
              ></path>
            </mask>
            <g  mask="url(#mask1_1355_12859)">
              <path
                
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.2376 16.9226C17.9598 16.9226 17.6986 16.753 17.595 16.4789C17.4602 16.1242 17.639 15.7263 17.9937 15.5925C18.7729 15.2973 18.7729 14.9371 18.7729 14.7831C18.7729 14.2633 18.1578 13.9077 16.9451 13.7271C16.5692 13.6703 16.3098 13.3201 16.3657 12.9452C16.4226 12.5693 16.7792 12.3173 17.1477 12.3658C19.6282 12.7371 20.1479 13.8857 20.1479 14.7831C20.1479 15.4513 19.8592 16.3561 18.4814 16.8777C18.4017 16.9079 18.3192 16.9226 18.2376 16.9226Z"
                fill="#FFFFFF"
              ></path>
            </g>
          </svg>
          </span>
        <span class="font-nunito w-full overflow-hidden text-ellipsis text-sm">
          ${event.title}
        </span>
      </div>`;
    return { html: customEvent };
  };
  const handleDayHeaderContent = (arg) => {
    const customHeader = `<div class="font-nunito"> <h6 class="m-0 text-[16px] leading-[1.364rem] font-extrabold">${moment(
      arg.date
    ).format(
      "ddd"
    )}</h6> <h3 class="m-0 text-[1.5rem] leading-[2.046rem] font-extrabold">${moment(
      arg.date
    ).format("DD")}</h3></div>`;
    return { html: customHeader };
  };
  useEffect(() => {
    const URL = `classrooms/?min_date=${moment(maxMinDate?.startStr).format("YYYY-MM-DD")}%2000:00&max_date=${moment(maxMinDate?.endStr).format("YYYY-MM-DD")}%2023:59&school=${filteredSchool}&subject=${filteredSubject}`;
    fetchData
      .get(URL)
      .then((res) => {
        setAllClasses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filteredSubject, filteredSchool, maxMinDate]);

  const handleEventClick = ({ event }) => {
    navigate(`classroom/${event._def.publicId}`);
  };
  const classEvents = allClasses?.map((data) => {
    return {
      id: data.id,
      title: data.title,
      start: moment(data.class_date).format("YYYY-MM-DD"),
      color:
        (data.status === "Pending" && "#FFBF23") ||
        (data.status === "Accepted" && "#52C16A") ||
        (data.status === "Ended" && "#FF6A55"),
    };
  });
  if (isLoading) {
    return (
      <div className="h-[70vh] w-full flex items-center justify-center">
        <Spin />
      </div>
    );
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
        <div className={role === "Student" ? "col-span-10" : "col-span-9"}>
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
            dayMaxEventRows={3}
            dateClick={(event) =>
              role === "Student" && calendarEventHandler(event)
            }
            events={classEvents}
            eventColor="#FFBF00"
            eventClick={(e) => handleEventClick(e)}
            datesSet={(e) => setMaxMinTime(e)}
            eventContent={handleEventContent}
            height="auto"
            dayHeaderContent={handleDayHeaderContent}
          />

          <SessionModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            date={date}
          />
        </div>

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
              <div
                onClick={() => {
                  dispatch(setFilteredSubject([]));
                  setFilteredSchool([]);
                }}
                className="flex items-center gap-1.5 cursor-pointer mt-5 justify-end"
              >
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
                  {filteredSubject && (
                    <Checkbox.Group
                      className="!flex !flex-col !gap-5"
                      options={subjects?.map((item) => ({
                        label: item.name,
                        value: item.id,
                      }))}
                      defaultValue={filteredSubject}
                      onChange={(val) => dispatch(setFilteredSubject(val))}
                      value={filteredSubject}
                    />
                  )}
                </ul>
              </div>

              <div className="bg-white rounded-[8px] border border-gray-200 mt-5">
                <div className="flex items-center justify-between px-[1.875rem] py-3 border-b border-gray-200">
                  <div className="text-[15px] leading-[25px] text-black font-bold text-center font-nunito">
                    Schools
                  </div>
                </div>
                <ul className="h-64 px-[1.875rem] pt-4">
                  <Checkbox.Group
                    className="!flex !flex-col !gap-5"
                    options={school?.map((item) => ({
                      label: item.name,
                      value: item.id,
                    }))}
                    onChange={(val) => setFilteredSchool(val)}
                    value={filteredSchool}
                  />
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
