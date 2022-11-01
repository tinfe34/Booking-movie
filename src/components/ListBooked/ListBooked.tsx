import { useEffect } from "react";
import _ from "lodash";
import moment from "moment";

//slices
import { getInfoBooked } from "slices/bookingSlice";

//hooks
import { useAppDispatch, useAppSelector } from "hooks/store";

const ListBooked = () => {
  const { infoBooked } = useAppSelector((state) => state.booking);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInfoBooked());
  }, []);
  
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
