import { LoginValues, RegisterValues } from "interface/login";
import { UserLogin } from "interface/user";
import axiosClient from "./axiosClient";

const authAPI = {
  login: (userLogin: LoginValues) => {
    return axiosClient.post<any, UserLogin>(
      "QuanLyNguoiDung/DangNhap",
      userLogin
    );
  },
  getInfoBooked: () => {
    return axiosClient.post("QuanLyNguoiDung/ThongTinTaiKhoan");
  },
  register: (userRegisger: RegisterValues) => {
    return axiosClient.post("QuanLyNguoiDung/DangKy", userRegisger);
  },
};

export default authAPI;
