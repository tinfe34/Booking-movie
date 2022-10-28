export interface InfoFilm {
    maLichChieu: number;
    tenCumRap: string;
    tenRap: string;
    diaChi: string;
    tenPhim: string;
    hinhAnh: string;
    ngayChieu: string;
    gioChieu: string;
}

export interface Seat {
    maGhe: number;
    tenGhe: string;
    maRap: number;
    loaiGhe: string;
    stt: string;
    giaVe: number;
    daDat: boolean;
    taiKhoanNguoiDat: string | null;
}

export interface Booking {
    thongTinPhim: InfoFilm;
    danhSachGhe: Seat[];
}
