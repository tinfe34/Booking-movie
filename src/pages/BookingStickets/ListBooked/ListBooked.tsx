import { Table, Tag } from "antd";
import { AppDispatch, RootState } from "configStore";
import _ from "lodash";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoBooked } from "slices/bookingSlice";

const ListBooked = () => {
    const { infoBooked } = useSelector((state: RootState) => state.booking);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getInfoBooked());
    }, []);
    console.log(infoBooked);

    return (
        <div className="container">
            <table className="table table-hover table-bordered">
                <thead className=" table-warning">
                    <tr>
                        <th scope="col">Phim</th>
                        <th scope="col">Ngày đặt</th>
                        <th scope="col">Rạp</th>
                        <th scope="col">Ghế đã đặt</th>
                    </tr>
                </thead>
                <tbody>
                    {infoBooked?.thongTinDatVe.map((ticket: any, index: any) => {
                        console.log(infoBooked);
                        const tickets: any = _.first(ticket.danhSachGhe);
                        return (
                            <tr key={index}>
                                <th>{ticket.tenPhim}</th>
                                <td>
                                    {moment(ticket.ngayDat).format("hh:mm A")} - Ngày chiếu:{" "}
                                    {moment(ticket.ngayDat).format("DD-MM-YYYY")}
                                </td>
                                <td>
                                    {tickets.tenHeThongRap} - {tickets.tenRap}
                                </td>
                                <td>
                                    {ticket.danhSachGhe.map((seat: any, index: any) => {
                                        return <span key={index}>[{seat.tenGhe}], </span>;
                                    })}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ListBooked;
