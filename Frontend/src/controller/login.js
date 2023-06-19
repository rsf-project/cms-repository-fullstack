import axios from "axios";
import jwt_decode from "jwt-decode";
import { LoginNotification } from "../utils/Notification";

export const Login = async (payload, setJwtCookie, navigate) => {
  await axios({
    method: "post",
    url: "http://127.0.0.1:8800/admin/v1/login",
    data: payload,
  })
    .then((response) => {
      const decodeToken = jwt_decode(response.data.data.token);
      setJwtCookie("token", response.data.data.token, { path: "/" });
      setJwtCookie("username", decodeToken.name, { path: "/" });
      navigate("/category");
    })
    .catch((error) => {
      LoginNotification();
    });
};
