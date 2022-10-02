import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken]);

  if (accessToken) {
    return children;
  }
};

export default ProtectedRoute;
