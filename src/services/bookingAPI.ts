import { Booking } from "interface/booking";
import axiosClient from "./axiosClient";

const bookingAPI = {
    getBookingSticket: (MaLichChieu: number) => {
        return axiosClient.get<Booking>("QuanLyDatVe/LayDanhSachPhongVe", {
            params: {
                MaLichChieu: MaLichChieu,
            },
        });
    },
    getSticketAction: (data: any) => {
        return axiosClient.post("QuanLyDatVe/DatVe", data);
    },
};
export default bookingAPI;
