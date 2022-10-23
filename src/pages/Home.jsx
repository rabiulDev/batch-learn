import { Dropdown,  Layout, Menu, } from "antd";
import React, { useEffect, useState } from "react";
import profile from "../assets/images/profile.png";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import ChangePasswordModal from "../components/ChangePasswordModal";
import { useDispatch } from "react-redux";
import {loadAccountData} from "../app/features/account"
import useAuth from "../auth/useAuth";
const { Header, Content, Sider } = Layout;

const Home = () => {
  const {fetchData} = useAuth()
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
  };
  const menu = (
    <Menu
      items={[
        {
          label: (
            <Link to="/profile" className="dropdown-item ">
              <span className="w-[32px] h-[32px] flex items-center justify-center">
                <svg
                  fill="none"
                  height="18"
                  viewBox="0 0 14 18"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M6.9873 11.616C3.76429 11.616 1.01191 12.1033 1.01191 14.0549C1.01191 16.0065 3.74683 16.5112 6.9873 16.5112C10.2103 16.5112 12.9619 16.0231 12.9619 14.0723C12.9619 12.1215 10.2278 11.616 6.9873 11.616Z"
                    fillRule="evenodd"
                    stroke="#95A3BD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="M6.9873 8.8324C9.10238 8.8324 10.8167 7.11733 10.8167 5.00225C10.8167 2.88717 9.10238 1.17288 6.9873 1.17288C4.87222 1.17288 3.15714 2.88717 3.15714 5.00225C3.15 7.11018 4.85318 8.82526 6.96032 8.8324H6.9873Z"
                    fillRule="evenodd"
                    stroke="#95A3BD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.42857"
                  ></path>
                </svg>
              </span>

              <span>Profile</span>
            </Link>
          ),
          key: "0",
        },
        {
          label: (
            <Link to="/billings" className="dropdown-item ">
              <span className="w-[32px] h-[32px] flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 10H13.75V3.125C13.75 2.62772 13.5525 2.15081 13.2008 1.79917C12.8492 1.44754 12.3723 1.25 11.875 1.25H3.125C2.62772 1.25 2.15081 1.44754 1.79917 1.79917C1.44754 2.15081 1.25 2.62772 1.25 3.125V15.625C1.25 16.4538 1.57924 17.2487 2.16529 17.8347C2.75134 18.4208 3.5462 18.75 4.375 18.75H15.625C16.4538 18.75 17.2487 18.4208 17.8347 17.8347C18.4208 17.2487 18.75 16.4538 18.75 15.625V11.875C18.75 11.3777 18.5525 10.9008 18.2008 10.5492C17.8492 10.1975 17.3723 10 16.875 10ZM2.5 15.625V3.125C2.5 2.95924 2.56585 2.80027 2.68306 2.68306C2.80027 2.56585 2.95924 2.5 3.125 2.5H11.875C12.0408 2.5 12.1997 2.56585 12.3169 2.68306C12.4342 2.80027 12.5 2.95924 12.5 3.125V15.625C12.4963 16.3017 12.716 16.9608 13.125 17.5H4.375C3.87772 17.5 3.40081 17.3025 3.04917 16.9508C2.69754 16.5992 2.5 16.1223 2.5 15.625ZM17.5 15.625C17.5 16.1223 17.3025 16.5992 16.9508 16.9508C16.5992 17.3025 16.1223 17.5 15.625 17.5C15.1277 17.5 14.6508 17.3025 14.2992 16.9508C13.9475 16.5992 13.75 16.1223 13.75 15.625V11.25H16.875C17.0408 11.25 17.1997 11.3158 17.3169 11.4331C17.4342 11.5503 17.5 11.7092 17.5 11.875V15.625Z"
                    fill="#95A3BD"
                  ></path>
                  <path
                    d="M4.375 5H6.875C7.04076 5 7.19973 4.93415 7.31694 4.81694C7.43415 4.69973 7.5 4.54076 7.5 4.375C7.5 4.20924 7.43415 4.05027 7.31694 3.93306C7.19973 3.81585 7.04076 3.75 6.875 3.75H4.375C4.20924 3.75 4.05027 3.81585 3.93306 3.93306C3.81585 4.05027 3.75 4.20924 3.75 4.375C3.75 4.54076 3.81585 4.69973 3.93306 4.81694C4.05027 4.93415 4.20924 5 4.375 5Z"
                    fill="#95A3BD"
                  ></path>
                  <path
                    d="M10.625 8.125H4.375C4.20924 8.125 4.05027 8.19085 3.93306 8.30806C3.81585 8.42527 3.75 8.58424 3.75 8.75C3.75 8.91576 3.81585 9.07473 3.93306 9.19194C4.05027 9.30915 4.20924 9.375 4.375 9.375H10.625C10.7908 9.375 10.9497 9.30915 11.0669 9.19194C11.1842 9.07473 11.25 8.91576 11.25 8.75C11.25 8.58424 11.1842 8.42527 11.0669 8.30806C10.9497 8.19085 10.7908 8.125 10.625 8.125Z"
                    fill="#95A3BD"
                  ></path>
                  <path
                    d="M10.625 10.625H4.375C4.20924 10.625 4.05027 10.6908 3.93306 10.8081C3.81585 10.9253 3.75 11.0842 3.75 11.25C3.75 11.4158 3.81585 11.5747 3.93306 11.6919C4.05027 11.8092 4.20924 11.875 4.375 11.875H10.625C10.7908 11.875 10.9497 11.8092 11.0669 11.6919C11.1842 11.5747 11.25 11.4158 11.25 11.25C11.25 11.0842 11.1842 10.9253 11.0669 10.8081C10.9497 10.6908 10.7908 10.625 10.625 10.625Z"
                    fill="#95A3BD"
                  ></path>
                  <path
                    d="M10.625 13.125H7.5C7.33424 13.125 7.17527 13.1908 7.05806 13.3081C6.94085 13.4253 6.875 13.5842 6.875 13.75C6.875 13.9158 6.94085 14.0747 7.05806 14.1919C7.17527 14.3092 7.33424 14.375 7.5 14.375H10.625C10.7908 14.375 10.9497 14.3092 11.0669 14.1919C11.1842 14.0747 11.25 13.9158 11.25 13.75C11.25 13.5842 11.1842 13.4253 11.0669 13.3081C10.9497 13.1908 10.7908 13.125 10.625 13.125Z"
                    fill="#95A3BD"
                  ></path>
                </svg>
              </span>
              <span>Billings</span>
            </Link>
          ),
          key: "1",
        },

        {
          label: (
            <div onClick={() => setOpenModal(true)} className="dropdown-item ">
              <span className="w-[32px] h-[32px] flex items-center justify-center">
                <svg
                  fill="none"
                  height="20"
                  viewBox="0 0 16 20"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-45f12684=""
                >
                  <path
                    d="M12.0548 7.6605V5.69242C12.0548 3.38884 10.1866 1.52067 7.88301 1.52067C5.57943 1.51059 3.70393 3.36959 3.69385 5.67409V5.69242V7.6605"
                    stroke="#95A3BD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="M11.3762 18.4788H4.372C2.4525 18.4788 0.895996 16.9232 0.895996 15.0028V11.0712C0.895996 9.1508 2.4525 7.59521 4.372 7.59521H11.3762C13.2957 7.59521 14.8522 9.1508 14.8522 11.0712V15.0028C14.8522 16.9232 13.2957 18.4788 11.3762 18.4788Z"
                    fillRule="evenodd"
                    stroke="#95A3BD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  ></path>
                  <path
                    d="M7.87429 12.0192V14.0551"
                    stroke="#95A3BD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  ></path>
                </svg>
              </span>
              <span>Change Password</span>
            </div>
          ),
          key: "2",
        },
        {
          label: (
            <Link to="/login" onClick={handleLogout} className="dropdown-item ">
              <span className="w-[32px] h-[32px] flex items-center justify-center">
                <svg
                  fill="none"
                  height="18"
                  viewBox="0 0 18 18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5133 4.9854V4.2079C11.5133 2.51207 10.1383 1.13707 8.4425 1.13707H4.38C2.685 1.13707 1.31 2.51207 1.31 4.2079V13.4829C1.31 15.1787 2.685 16.5537 4.38 16.5537H8.45083C10.1417 16.5537 11.5133 15.1829 11.5133 13.4921V12.7062"
                    stroke="#95A3BD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M17.1746 8.84532H7.14042"
                    stroke="#95A3BD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M14.7343 6.41607L17.1743 8.84523L14.7343 11.2752"
                    stroke="#95A3BD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </span>
              Logout
            </Link>
          ),
          key: "3",
        },
      ]}
    />
  );

 useEffect(()=>{
  dispatch(loadAccountData(fetchData))
 },[])




  return (
    <Layout className=" bg-white">
      <Header className="header__wrapper !pl-6 !pr-9">
        {/* Home Icon  */}
        <div
          onClick={() => navigate("/")}
          className="home_icon flex items-center justify-center cursor-pointer"
        >
          <svg
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            data-v-45f12684=""
          >
            <path
              d="M6.08987 13.8489V11.8105C6.08987 11.2901 6.5148 10.8682 7.03898 10.8682H8.95509C9.20681 10.8682 9.44822 10.9675 9.62621 11.1442C9.8042 11.3209 9.9042 11.5606 9.9042 11.8105V13.8489C9.90261 14.0653 9.98806 14.2733 10.1416 14.4268C10.2951 14.5804 10.5041 14.6667 10.722 14.6667H12.0292C12.6398 14.6683 13.2259 14.4286 13.6581 14.0006C14.0904 13.5726 14.3334 12.9914 14.3334 12.3853V6.57795C14.3333 6.08835 14.1147 5.62394 13.7364 5.30982L9.28937 1.78395C8.51579 1.16575 7.40743 1.18571 6.65695 1.83136L2.31136 5.30982C1.91518 5.61468 1.67839 6.08046 1.66669 6.57795V12.3793C1.66669 13.6426 2.69827 14.6667 3.9708 14.6667H5.24821C5.70084 14.6667 6.06868 14.3042 6.07196 13.8549L6.08987 13.8489Z"
              fill="white"
            ></path>
          </svg>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="ml-9 home-icon-hover">
            <NavLink
              to=""
              end
              className={({ isActive }) => (isActive ? "active-home-style flex items-center font-semibold text-base font-nunito relative" : "flex items-center font-semibold text-base font-nunito text-[#042040] relative home-hover") }
            >
              <span>
                <svg
                  fill="none"
                  height="22"
                  viewBox="0 0 22 22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M2.75 5.95833C2.75 3.55189 2.77577 2.75 5.95833 2.75C9.1409 2.75 9.16667 3.55189 9.16667 5.95833C9.16667 8.36478 9.17682 9.16667 5.95833 9.16667C2.73985 9.16667 2.75 8.36478 2.75 5.95833Z"
                    fillRule="evenodd"
                    stroke="#95A3BD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>{" "}
                  <path
                    clipRule="evenodd"
                    d="M12.8335 5.95833C12.8335 3.55189 12.8593 2.75 16.0418 2.75C19.2244 2.75 19.2502 3.55189 19.2502 5.95833C19.2502 8.36478 19.2603 9.16667 16.0418 9.16667C12.8233 9.16667 12.8335 8.36478 12.8335 5.95833Z"
                    fillRule="evenodd"
                    stroke="#95A3BD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>{" "}
                  <path
                    clipRule="evenodd"
                    d="M2.75 16.0416C2.75 13.6351 2.77577 12.8333 5.95833 12.8333C9.1409 12.8333 9.16667 13.6351 9.16667 16.0416C9.16667 18.448 9.17682 19.2499 5.95833 19.2499C2.73985 19.2499 2.75 18.448 2.75 16.0416Z"
                    fillRule="evenodd"
                    stroke="#95A3BD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>{" "}
                  <path
                    clipRule="evenodd"
                    d="M12.8335 16.0416C12.8335 13.6351 12.8593 12.8333 16.0418 12.8333C19.2244 12.8333 19.2502 13.6351 19.2502 16.0416C19.2502 18.448 19.2603 19.2499 16.0418 19.2499C12.8233 19.2499 12.8335 18.448 12.8335 16.0416Z"
                    fillRule="evenodd"
                    stroke="#95A3BD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </span>
              <span className="ml-[10px]">Home</span>
            </NavLink>
          </div>

          {/* Avatar logo  */}
          <Dropdown overlay={menu} trigger={["click"]}>
            <div className="cursor-pointer flex items-center gap-x-[18px]">
              <span className="h-10 w-10">
                <img
                  src={profile}
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </span>

              <span>
                <svg
                  fill="none"
                  height="8"
                  viewBox="0 0 14 8"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8332 1.08325L6.99984 6.91659L1.1665 1.08325"
                    stroke="#95A3BD"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </span>
            </div>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider
          theme="light"
          width="78px"
          className="wrapper__sidebar !border-solid !border-r !p-5"
        >
          <span className="flex items-center justify-center h-[40px] w-full">
            <NavLink
              to="/session-history"
              className={({ isActive }) => (isActive ? " active-style-sidenav " : "")}
            >
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
                    fill="#95A3BD"
                  ></path>{" "}
                  <path
                    d="M10 5C9.77899 5 9.56703 5.0878 9.41075 5.24408C9.25447 5.40036 9.16667 5.61232 9.16667 5.83333V10C9.16672 10.221 9.25454 10.4329 9.41083 10.5892L11.9108 13.0892C12.068 13.241 12.2785 13.325 12.497 13.3231C12.7155 13.3212 12.9245 13.2335 13.079 13.079C13.2335 12.9245 13.3212 12.7155 13.3231 12.497C13.325 12.2785 13.241 12.068 13.0892 11.9108L10.8333 9.655V5.83333C10.8333 5.61232 10.7455 5.40036 10.5893 5.24408C10.433 5.0878 10.221 5 10 5Z"
                    fill="#95A3BD"
                  ></path>
                </g>{" "}
                <defs>
                  <clipPath id="clip0_2281_16671">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </NavLink>
          </span>
        </Sider>
        <Layout>
          <Content className=" bg-white pt-[108px] pl-[108px] pr-[30px]">
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      <ChangePasswordModal openModal={openModal} setOpenModal={setOpenModal}/>
    </Layout>
  );
};

export default Home;
