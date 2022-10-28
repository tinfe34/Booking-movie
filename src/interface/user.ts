import { string } from "yup";

export interface User {
    isLoading: boolean;
    infoBookedUser: string[];
    listMovieShedule: string[];
    userAction: string;
    listUser: string[];
    userName: string;
    userType: string;
}

export interface UserLogin {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDT: string;
    maNhom: string;
    maLoaiNguoiDung: string;
    accessToken: string;
}
