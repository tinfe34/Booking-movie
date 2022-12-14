export interface Cinema {
  maHeThongRap: string;
  tenHeThongRap: string;
  biDanh: string;
  logo: string;
}

export interface infoTimeWatchForCodeFilm {
  maPhim: string;
}

export interface lcFilm {
  maLichChieu: string;
  maRap: string;
  tenRap: string;
  ngayChieuGioChieu: string;
  giaVe: string;
  thoiLuong: string;
}

export interface CumRapChieu {
  maCumRap: string;
  tenCumRap: string;
  hinhAnh: string;
  diaChi: string;
  lichChieuPhim: lcFilm[];
}

export interface CinemaGroup {
  cumRapChieu: CumRapChieu[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
}

export interface SysCinemaForm {
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
  heThongRapChieu: CinemaGroup[];
}
