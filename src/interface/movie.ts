export interface Movie {
    maPhim: number;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa: string;
    maNhom: string;
    ngayKhoiChieu: string;
    danhGia: number;
    hot: boolean;
    dangChieu: boolean;
    sapChieu: boolean;
}

// lịch chiếu theo phim
export interface MovieShowTimes {
    maLichChieu: number;
    maRap: string;
    tenRap: string;
    ngayChieuGioChieu: string;
    giaVe: number;
}

// danh sách phim
export interface LstMovie {
    lstLichChieuTheoPhim: MovieShowTimes[];
    maPhim: number;
    tenPhim: string;
    hinhAnh: string;
    hot: boolean;
    dangChieu: boolean;
    sapChieu: boolean;
}

// rạp
export interface LstCenima {
    danhSachPhim: LstMovie[];
    maCumRap: string;
    tenCumRap: string;
    hinhAnh: string;
    diaChi: string;
}

// hệ thống rạp
export interface SysCinema {
    lstCumRap: LstCenima[];
    maHeThongRap: string;
    tenHeThongRap: string;
    logo: string;
    mahom: string;
}
