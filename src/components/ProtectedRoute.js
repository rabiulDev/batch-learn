import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loadSchools} from "../app/features/getSchools"
import {loadSubjects} from "../app/features/getSubjects"
import {loadClassTools} from "../app/features/getClassesTools"
import { loadProfileInfoData } from "../app/features/profileInfo";
import useAuth from "../auth/useAuth";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch()
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const navigate = useNavigate();
  const { fetchData } = useAuth();

  useEffect(() => {
    dispatch(loadSubjects())
    dispatch(loadSchools())
    dispatch(loadClassTools())
    dispatch(loadProfileInfoData(fetchData));
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken]);

  if (accessToken) {
    return children;
  }
};

export default ProtectedRoute;
