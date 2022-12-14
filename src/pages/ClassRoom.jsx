import React, { useEffect } from "react";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../auth/useAuth";
import { loadClassroomData } from "../app/features/classRoom";
import { useParams } from "react-router-dom";
import moment from "moment";
import NoAccess from "../components/NoAccess";
import TeacherAttachments from "../components/TeacherAttachments";
import StudentAttachments from "../components/StudentAttachments";
import ClassroomComment from "../components/ClassroomComment";
import ClassroomMembers from "../components/ClassroomMembers";
import ClassroomCountdown from "../components/ClassroomCountdown";

const ClassRoom = () => {
  const { fetchData } = useAuth();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { role } = useSelector((state) => state.accout);
  const { isLoading, classroom, isError } = useSelector(
    (state) => state.classRoom
  );

  //classrooms/35/public-details/

  const URL = `classrooms/${id}/public-details/`;

  useEffect(() => {
    dispatch(loadClassroomData({ fetchData, URL }));
  }, []);

  if (isLoading) {
    return (
      <div className="h-[70vh] w-full flex items-center justify-center">
        {" "}
        <Spin />{" "}
      </div>
    );
  } else {
    return (
      <div className="scroolbar pb-7 h-full">
        {/* BREADCUMBER   */}
        <div className="mb-9 flex items-center gap-2.5">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1360_13002"
                maskUnits="userSpaceOnUse"
                x="2"
                y="1"
                width="15"
                height="18"
                style={{ maskType: "alpha" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.50024 1.67627H16.7108V18.2209H2.50024V1.67627Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0_1360_13002)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.31117 2.92626C4.93034 2.92626 3.78367 4.0446 3.75117 5.42376V14.3363C3.72034 15.7638 4.84534 16.9396 6.25867 16.9713H12.9787C14.3695 16.9138 15.4712 15.7579 15.4612 14.3413V6.94959L11.5987 2.92626H6.32117H6.31117ZM6.32116 18.2213H6.23033C4.12866 18.1738 2.45533 16.4254 2.50116 14.3229V5.40877C2.5495 3.34127 4.257 1.67627 6.3095 1.67627H6.32366H11.8653C12.0353 1.67627 12.1978 1.74544 12.3162 1.86794L16.537 6.26544C16.6487 6.38127 16.7112 6.5371 16.7112 6.69794V14.3363C16.7262 16.4271 15.0978 18.1354 13.0037 18.2204L6.32116 18.2213Z"
                  fill="#3f8cfe"
                ></path>
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.0821 7.48675H13.7862C12.2612 7.48258 11.0212 6.23925 11.0212 4.71591V2.29175C11.0212 1.94675 11.3012 1.66675 11.6462 1.66675C11.9912 1.66675 12.2712 1.94675 12.2712 2.29175V4.71591C12.2712 5.55258 12.9521 6.23425 13.7879 6.23675H16.0821C16.4271 6.23675 16.7071 6.51675 16.7071 6.86175C16.7071 7.20675 16.4271 7.48675 16.0821 7.48675Z"
                fill="#3f8cfe"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.4906 13.4236H6.99057C6.64557 13.4236 6.36557 13.1436 6.36557 12.7986C6.36557 12.4536 6.64557 12.1736 6.99057 12.1736H11.4906C11.8356 12.1736 12.1156 12.4536 12.1156 12.7986C12.1156 13.1436 11.8356 13.4236 11.4906 13.4236Z"
                fill="#3f8cfe"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.7865 10.2969H6.98984C6.64484 10.2969 6.36484 10.0169 6.36484 9.67187C6.36484 9.32687 6.64484 9.04688 6.98984 9.04688H9.7865C10.1315 9.04688 10.4115 9.32687 10.4115 9.67187C10.4115 10.0169 10.1315 10.2969 9.7865 10.2969Z"
                fill="#3f8cfe"
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
            Class Details
          </p>
        </div>

        {/* MAIN CLASSROOM  */}
        <div className="grid grid-cols-12 gap-6">
          {/* CLASSROOM LEFT SIDE  */}
          <div className="col-span-8">
            <div className="w-full h-72 bg-[#ecf4ff] rounded-[10px] flex flex-col items-center justify-center gap-5">
              <ClassroomCountdown />
            </div>

            {/* CLASS INFO  */}
            <div className="my-10">
              <h3 className="mb-1.5 text-[1.5rem] leading-[2.046rem] font-extrabold font-nunito">
                {classroom?.title}
              </h3>
              <p className="text-base font-nunito font-normal text-gray-500">
                {classroom?.description}
              </p>

              <div className="mt-5 flex items-center justify-between gap-6">
                <div className="text-base font-nunito font-normal text-gray-500">
                  <p className="flex items-center gap-1.5 font-normal leading-[1.625] m-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2281_16674)">
                        <path
                          d="M18.3808 4.35827L12.2358 1.43077C10.8832 0.622805 9.19957 0.608469 7.83332 1.39327L1.61918 4.35827C1.59586 4.36995 1.57168 4.38245 1.54918 4.39577C0.0744916 5.23898 -0.437462 7.118 0.405742 8.59269C0.691562 9.09261 1.11199 9.50222 1.61918 9.77495L3.33336 10.5916V14.675C3.33437 16.5009 4.52246 18.114 6.26586 18.6566C7.4791 19.0076 8.73711 19.1794 10 19.1666C11.2628 19.1808 12.5208 19.0104 13.7342 18.6608C15.4776 18.1182 16.6657 16.505 16.6667 14.6791V10.59L18.3334 9.79327V16.6666C18.3334 17.1268 18.7065 17.4999 19.1667 17.4999C19.627 17.4999 20 17.1268 20 16.6666V6.66659C20.0056 5.68804 19.2329 4.78405 18.3808 4.35827ZM15 14.6791C15.0004 15.7713 14.2918 16.7373 13.25 17.065C12.1935 17.3668 11.0987 17.5134 10 17.5C8.90129 17.5134 7.80648 17.3668 6.75 17.065C5.70816 16.7373 4.99957 15.7713 5 14.6791V11.3858L7.76418 12.7025C8.44621 13.1075 9.22516 13.3203 10.0184 13.3183C10.7734 13.3237 11.5157 13.1238 12.1659 12.74L15 11.3858V14.6791ZM17.6667 8.27077L11.3817 11.2708C10.5054 11.781 9.41914 11.7666 8.55668 11.2333L2.4075 8.30827C1.72207 7.93866 1.46605 7.08339 1.83566 6.398C1.96066 6.1662 2.14809 5.97405 2.37668 5.84327L8.6225 2.85995C9.4991 2.35081 10.5847 2.36523 11.4475 2.89745L17.5925 5.82495C18.0444 6.07589 18.3271 6.54976 18.3333 7.06663C18.3341 7.55624 18.082 8.01155 17.6667 8.27077Z"
                          fill="#95A3BD"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2281_16674">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <span>{classroom?.school}</span>
                  </p>

                  <p className="flex items-center gap-1.5 font-normal leading-[1.625] m-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1744_13149"
                        maskUnits="userSpaceOnUse"
                        x="2"
                        y="1"
                        width="15"
                        height="18"
                        style={{ maskType: "alpha" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.50024 1.67651H16.7108V18.2211H2.50024V1.67651Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_1744_13149)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.31114 2.92651C4.93031 2.92651 3.78364 4.04484 3.75114 5.42401V14.3365C3.72031 15.764 4.84531 16.9398 6.25864 16.9715H12.9786C14.3695 16.914 15.4711 15.7582 15.4611 14.3415V6.94984L11.5986 2.92651H6.32114H6.31114ZM6.32116 18.2215H6.23033C4.12866 18.174 2.45533 16.4257 2.50116 14.3232V5.40901C2.5495 3.34151 4.257 1.67651 6.3095 1.67651H6.32366H11.8653C12.0353 1.67651 12.1978 1.74568 12.3162 1.86818L16.537 6.26568C16.6487 6.38151 16.7112 6.53735 16.7112 6.69818V14.3365C16.7262 16.4273 15.0978 18.1357 13.0037 18.2207L6.32116 18.2215Z"
                          fill="#95A3BD"
                        ></path>
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.0818 7.48699H13.786C12.261 7.48283 11.021 6.23949 11.021 4.71616V2.29199C11.021 1.94699 11.301 1.66699 11.646 1.66699C11.991 1.66699 12.271 1.94699 12.271 2.29199V4.71616C12.271 5.55282 12.9518 6.23449 13.7877 6.23699H16.0818C16.4268 6.23699 16.7068 6.51699 16.7068 6.86199C16.7068 7.20699 16.4268 7.48699 16.0818 7.48699Z"
                        fill="#95A3BD"
                      ></path>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.4905 13.4237H6.99048C6.64548 13.4237 6.36548 13.1437 6.36548 12.7987C6.36548 12.4537 6.64548 12.1737 6.99048 12.1737H11.4905C11.8355 12.1737 12.1155 12.4537 12.1155 12.7987C12.1155 13.1437 11.8355 13.4237 11.4905 13.4237Z"
                        fill="#95A3BD"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.78641 10.2971H6.98975C6.64475 10.2971 6.36475 10.0171 6.36475 9.67212C6.36475 9.32712 6.64475 9.04712 6.98975 9.04712H9.78641C10.1314 9.04712 10.4114 9.32712 10.4114 9.67212C10.4114 10.0171 10.1314 10.2971 9.78641 10.2971Z"
                        fill="#95A3BD"
                      ></path>
                    </svg>
                    <span>{classroom?.subject?.name}</span>
                  </p>
                  <p className="flex items-center gap-1.5 font-normal leading-[1.625] m-0">
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
                        d="M10 2.91667C6.09418 2.91667 2.91668 6.09417 2.91668 10C2.91668 13.9058 6.09418 17.0833 10 17.0833C13.9058 17.0833 17.0833 13.9058 17.0833 10C17.0833 6.09417 13.9058 2.91667 10 2.91667ZM10 18.3333C5.405 18.3333 1.66667 14.595 1.66667 9.99996C1.66667 5.40496 5.405 1.66663 10 1.66663C14.595 1.66663 18.3333 5.40496 18.3333 9.99996C18.3333 14.595 14.595 18.3333 10 18.3333Z"
                        fill="#95A3BD"
                      ></path>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.8593 13.077C12.7502 13.077 12.6402 13.0487 12.5393 12.9895L9.39768 11.1153C9.20935 11.002 9.09268 10.7978 9.09268 10.5778V6.53784C9.09268 6.19284 9.37268 5.91284 9.71768 5.91284C10.0635 5.91284 10.3427 6.19284 10.3427 6.53784V10.2228L13.1802 11.9145C13.476 12.092 13.5735 12.4753 13.3968 12.772C13.2793 12.9678 13.0718 13.077 12.8593 13.077Z"
                        fill="#95A3BD"
                      ></path>
                    </svg>
                    <span>
                      {moment(classroom?.class_date).format("YY:MM:DD hh:mm A")}
                    </span>
                  </p>
                  <p className="flex items-center gap-1.5 font-normal leading-[1.625] m-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1360_12870"
                        maskUnits="userSpaceOnUse"
                        x="1"
                        y="11"
                        width="14"
                        height="7"
                        style={{ maskType: "alpha" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.66685 11.6309H14.32V17.5472H1.66685V11.6309Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_1360_12870)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.99324 12.8808C5.6774 12.8808 2.91657 13.1783 2.91657 14.5992C2.91657 15.7258 4.6249 16.2975 7.99324 16.2975C11.3616 16.2975 13.0699 15.72 13.0699 14.5825C13.0699 13.4533 11.3616 12.8808 7.99324 12.8808ZM7.99328 17.5475C6.26328 17.5475 1.66661 17.5475 1.66661 14.5992C1.66661 11.6309 6.42828 11.6309 7.99328 11.6309C10.7091 11.6309 14.3199 11.9367 14.3199 14.5825C14.3199 17.5475 9.55828 17.5475 7.99328 17.5475Z"
                          fill="#95A3BD"
                        ></path>
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.99343 2.91676C6.3226 2.91676 4.96343 4.27593 4.96343 5.94593C4.96343 7.61593 6.3226 8.9751 7.99343 8.9751H8.01926C8.8226 8.97176 9.57926 8.65593 10.1468 8.08343C10.7151 7.5126 11.0259 6.75343 11.0226 5.94843C11.0226 4.27593 9.66343 2.91676 7.99343 2.91676ZM7.99332 10.2251C5.63332 10.2251 3.71332 8.30508 3.71332 5.94592C3.71332 3.58675 5.63332 1.66675 7.99332 1.66675C10.3525 1.66675 12.2725 3.58675 12.2725 5.94592C12.2775 7.08258 11.8367 8.15591 11.0333 8.96425C10.2317 9.77341 9.16082 10.2209 8.02165 10.2251H7.99332Z"
                        fill="#95A3BD"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.7354 9.27659C13.4287 9.27659 13.1612 9.05076 13.1171 8.73826C13.0696 8.39659 13.3071 8.07993 13.6487 8.03243C14.6887 7.88659 15.4737 6.98409 15.4754 5.93243C15.4754 4.88743 14.7271 4.00576 13.6979 3.83743C13.3571 3.78076 13.1262 3.45993 13.1821 3.11909C13.2379 2.77826 13.5604 2.54909 13.8996 2.60326C15.5371 2.87159 16.7254 4.27243 16.7254 5.93326C16.7221 7.60409 15.4746 9.03909 13.8229 9.27076C13.7937 9.27493 13.7646 9.27659 13.7354 9.27659Z"
                        fill="#95A3BD"
                      ></path>
                      <mask
                        id="mask1_1360_12870"
                        maskUnits="userSpaceOnUse"
                        x="14"
                        y="11"
                        width="5"
                        height="5"
                        style={{ maskType: "alpha" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.8712 11.2362H18.316V15.3841H14.8712V11.2362Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask1_1360_12870)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.5798 15.3841C16.3273 15.3841 16.0898 15.23 15.9956 14.9808C15.8731 14.6583 16.0356 14.2966 16.3581 14.175C17.0665 13.9066 17.0665 13.5791 17.0665 13.4391C17.0665 12.9666 16.5073 12.6433 15.4048 12.4791C15.0631 12.4275 14.8273 12.1091 14.8781 11.7683C14.9298 11.4266 15.254 11.1975 15.589 11.2416C17.844 11.5791 18.3165 12.6233 18.3165 13.4391C18.3165 14.0466 18.054 14.8691 16.8015 15.3433C16.729 15.3708 16.654 15.3841 16.5798 15.3841Z"
                          fill="#95A3BD"
                        ></path>
                      </g>
                    </svg>
                    <span>{classroom?.student_count} student joined</span>
                  </p>
                </div>

                {/* SOCIAL LINKS  */}
                <div className="flex items-center justify-end gap-6">
                  {/* FACEBOOK  */}
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.0796 14.9463 17.446 11 17.9381L11 12H13C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10H11V8C11 7.44772 11.4477 7 12 7H12.5C13.0523 7 13.5 6.55228 13.5 6C13.5 5.44772 13.0523 5 12.5 5H12C10.3431 5 9 6.34315 9 8V10H7C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12H9L9 17.9381C5.05369 17.446 2 14.0796 2 10ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                        fill="#95A3BD"
                      ></path>
                    </svg>
                  </span>

                  {/* TWITTER  */}
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 19 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.8171 2.98948C14.4641 2.48123 13.5202 1.76792 11.991 2.07507C11.0994 2.25417 10.5659 2.6962 10.2269 3.27774C9.8657 3.89717 9.6912 4.74021 9.6912 5.72163C9.6912 6.27389 9.2435 6.72159 8.6912 6.72159C6.32512 6.72159 4.07321 6.01899 2.17819 4.11741C2.05529 4.80147 1.96954 5.61428 2.01021 6.45709C2.06261 7.54309 2.3223 8.63269 2.93722 9.56569C3.54164 10.4828 4.53719 11.3229 6.20065 11.8502C6.53233 11.9553 6.78552 12.2253 6.86916 12.563C6.95281 12.9007 6.85489 13.2577 6.61061 13.5055C6.01965 14.1049 5.42529 14.5545 4.81459 14.9104C5.87536 15.0201 6.89712 15.0281 7.8447 14.9424C9.7643 14.7688 11.2936 14.2194 12.25 13.4433C14.2626 11.8101 15.3404 9.37639 15.1394 5.29874C15.1064 4.62772 15.7526 3.90527 16.0647 3.35665C15.5938 3.4447 15.1218 3.42821 14.8171 2.98948ZM1.59375 0.984279C1.9629 0.941249 2.32546 1.10648 2.53516 1.41331C4.01054 3.57212 5.78262 4.47018 7.7489 4.6745C7.8454 3.83331 8.0724 3.00216 8.4991 2.2704C9.125 1.19675 10.143 0.406309 11.5972 0.11423C13.6066 -0.289371 15.1366 0.43833 16.0244 1.32954L17.8162 0.99458C18.199 0.92304 18.5884 1.08014 18.8144 1.39722C19.0403 1.7143 19.0617 2.1337 18.8691 2.47211L17.1496 5.49419C17.3064 9.85559 16.0944 12.8993 13.5103 14.9963C12.1395 16.1086 10.178 16.7395 8.0249 16.9343C5.85497 17.1306 3.40214 16.8932 0.963824 16.1812C0.536044 16.0563 0.242544 15.6634 0.244124 15.2178C0.245694 14.7721 0.541954 14.3813 0.970604 14.2594C2.19682 13.9107 3.13012 13.6092 3.97377 13.0827C2.77531 12.4464 1.89225 11.6146 1.26726 10.6663C0.398594 9.34819 0.076484 7.87879 0.012534 6.55349C-0.051406 5.22833 0.140094 4.00097 0.341784 3.11514C0.456594 2.61088 0.590694 2.10427 0.775534 1.62032C0.909784 1.27152 1.22461 1.02732 1.59375 0.984279Z"
                        fill="#95A3BD"
                      ></path>
                    </svg>
                  </span>

                  {/* WHATS APP  */}
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C8.23637 20 6.57709 19.5427 5.13692 18.7397L4.83171 18.5624L1.79975 19.4542C1.06936 19.6691 0.388221 19.0329 0.519871 18.3093L0.54581 18.2002L1.43756 15.1683C0.52505 13.6594 0 11.8896 0 10C0 4.47715 4.47715 0 10 0ZM10 2C5.58172 2 2 5.58172 2 10C2 11.5769 2.4552 13.0444 3.24098 14.2818C3.43935 14.5943 3.52374 14.9781 3.45652 15.3589L3.41832 15.5217L2.97667 17.0233L4.47827 16.5817C4.91075 16.4545 5.36114 16.5323 5.71817 16.759C6.95564 17.5448 8.4231 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM7.10162 5.18408C7.31746 5.09158 7.57889 5.1085 7.78556 5.25926C8.28999 5.62722 8.69048 6.12076 9.03441 6.60344L9.36124 7.07746C9.41315 7.15417 9.46393 7.22933 9.5138 7.30228C9.69632 7.56921 9.67529 7.9239 9.46849 8.16596L9.3927 8.2422L8.4693 8.928C8.3778 8.996 8.3473 9.1195 8.4022 9.2195C8.6112 9.5998 8.9834 10.1657 9.4093 10.5916C9.8357 11.018 10.4284 11.4143 10.8348 11.6467C10.9226 11.6969 11.0294 11.6811 11.101 11.6157L11.1394 11.5706L11.7402 10.6555C11.9705 10.349 12.4007 10.282 12.7134 10.4984L13.2563 10.8768C13.7957 11.2618 14.315 11.6757 14.7255 12.2014C14.8872 12.4085 14.9112 12.6792 14.8148 12.9042C14.4188 13.8283 13.4165 14.6153 12.374 14.5769L12.2155 14.5678L12.0235 14.5488C11.9889 14.5446 11.953 14.5399 11.9158 14.5346L11.6781 14.4952C10.7544 14.3208 9.2726 13.797 7.73827 12.2627C6.20397 10.7284 5.68017 9.24657 5.50573 8.32286L5.46632 8.08516L5.44126 7.87742L5.42756 7.70191C5.42606 7.67547 5.42491 7.65047 5.42404 7.62695C5.38562 6.58294 6.17688 5.5804 7.10162 5.18408Z"
                        fill="#95A3BD"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-7 min-h-[480px]">
                {classroom.lock ? (
                  <NoAccess text="You don't have access to this classroom comments" />
                ) : (
                  <ClassroomComment />
                )}
              </div>

              <div className="col-span-12 md:col-span-5 min-h-[480px]">
                {classroom.lock ? (
                  <NoAccess text="You don't have access to this classroom members list" />
                ) : (
                  <ClassroomMembers />
                )}
              </div>
            </div>
          </div>

          {/* CLASSROOM RIGHT SIDE  */}
          <div className="col-span-4">
            {/* TEACHER DETAILS  */}

            {
             classroom?.teacher !== null && <div className="flex flex-col items-center w-full mb-7">
              <div className="flex gap-5 w-full items-center mb-2.5">
                <div className="w-full max-w-[3rem] h-[3rem] rounded-full overflow-hidden bg-blue-500 cursor-pointer group relative">
                  {
                    classroom?.teacher?.avatar === null ? <svg
                    width="28"
                    height="48"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M10.0002 0.157227C7.87916 0.157227 6.15405 1.88281 6.15405 4.00381V5.99662C6.15405 8.11777 7.87916 9.84336 10.0002 9.84336C12.1213 9.84336 13.8463 8.11777 13.8463 5.99662V4.00381C13.8463 1.88281 12.1213 0.157227 10.0002 0.157227Z"
                      fill="#8391A9"
                    ></path>
                    <path
                      d="M18.4821 14.8561C17.2506 12.7573 15.282 11.2013 12.9391 10.4747C12.8848 10.4579 12.8261 10.4722 12.7856 10.5122C11.6957 11.5868 10.3415 12.4252 10.0029 12.6277C9.64149 12.3967 8.1192 11.4044 7.21421 10.5122C7.1739 10.4722 7.11469 10.4579 7.06068 10.4747C4.71749 11.2015 2.74909 12.7574 1.51797 14.8562C1.48978 14.9043 1.48978 14.9639 1.51797 15.012C3.26622 17.991 6.51629 19.8416 9.9999 19.8416C13.4837 19.8416 16.7339 17.991 18.4821 15.012C18.5105 14.9638 18.5105 14.9041 18.4821 14.8561ZM15.231 16.0034C15.231 16.0883 15.1502 16.1532 15.0655 16.1532H14.0238C13.9389 16.1532 13.8463 16.2261 13.8463 16.3111V17.3884C13.8463 17.4731 13.801 17.5378 13.7161 17.5378H12.7805C12.6957 17.5378 12.6157 17.4731 12.6157 17.3884V16.3111C12.6154 16.2262 12.5574 16.1532 12.4725 16.1532H11.386C11.3011 16.1532 11.2309 16.0881 11.2309 16.0034V15.0759C11.2309 14.991 11.3011 14.9225 11.386 14.9225H12.4725C12.5574 14.9225 12.6154 14.8532 12.6154 14.7682V13.6897C12.6154 13.6048 12.6953 13.5379 12.7802 13.5379H13.7057C13.7904 13.5379 13.8462 13.6048 13.8462 13.6897V14.7714C13.8462 14.8564 13.9284 14.9224 14.0134 14.9224H15.0655C15.1502 14.9224 15.231 14.9942 15.231 15.0791V16.0034Z"
                      fill="#8391A9"
                    ></path>
                  </svg>: <img src={classroom?.teacher?.avatar} alt="teacher avatar" />
                  }
                </div>
                <div>
                  <h5 className="mb-1.5 text-[1.125rem] leading-[1.75rem] font-nunito font-extrabold">
                    {classroom?.teacher?.first_name}{" "}
                    {classroom?.teacher?.last_name}
                  </h5>
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-center gap-2.5 flex-wrap">
                  {classroom?.teacher?.subjects?.map((item) => (
                    <div
                      key={item.id}
                      className="bg-blue-50 py-1 px-2.5 rounded-[6px] text-[14px] text-gray-400 shadow-sm font-nunito font-semibold"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            }

            {/* TEACHER ATTACHMENTS  */}
            <div className="mb-2.5 h-full max-h-[430px] ">
              {classroom.lock ? (
                <NoAccess text="You don't have access to this classroom teacher attachments" />
              ) : (
                <TeacherAttachments />
              )}
            </div>
            {/* STUDENT ATTACHMENTS  */}
            <div className="mb-2.5 h-full max-h-[430px] ">
            {classroom.lock ? (
                <NoAccess text="You don't have access to this classroom student attachments" />
              ) : (
                <StudentAttachments />
              )}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ClassRoom;
