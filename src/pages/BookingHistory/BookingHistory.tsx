import { useEffect } from "react";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getInfoBooked } from "store/modules/bookingSlice";
import { useAppDispatch, useAppSelector } from "hooks/store";

interface Item {
  key: string;
  tenPhim: string;
  hinhAnh: string;
  giaVe: number;
  danhSachGhe: string[];
}

const BookingHistory = () => {
  const { infoBooked } = useAppSelector((state) => state.booking);
  const dispatch = useAppDispatch();

  const columns: ColumnsType<Item> = [
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (src) => <img src={src} width={70} height={50} />,
    },
    {
      title: "Giá Vé",
      dataIndex: "giaVe",
      key: "giaVe",
    },
    {
      title: "Danh Sách Ghế",
      dataIndex: "danhSachGhe",
      key: "danhSachGhe",
      render: (dsg) =>
        dsg.map((item: any, indx: any) => (
          <Tag color="#f50" key={indx}>
            {item.tenGhe}
          </Tag>
        )),
    },
  ];

  const data: Item[] = infoBooked?.thongTinDatVe
    ? infoBooked?.thongTinDatVe.map((item: Item) => {
        return {
          tenPhim: item.tenPhim,
          hinhAnh: item.hinhAnh,
          giaVe: item.giaVe,
          key: item.tenPhim,
          danhSachGhe: item.danhSachGhe,
        };
      })
    : [];

  useEffect(() => {
    dispatch(getInfoBooked());
  }, []);

  return (
    <div
      className="booking-history"
      style={{ margin: "60px 0 200px 0", overflow: "hidden" }}
    >
      <h1 className="text-center text-primary py-5">Lịch sử đặt vé</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Table columns={columns} dataSource={data} scroll={{ x: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
