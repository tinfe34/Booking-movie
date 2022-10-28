export interface LoginValues {
    taiKhoan: string;
    matKhau: string;
}

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}

export interface RegisterValues {
    taiKhoan: string;
    matKhau: string;
    hoTen: string;
    email: string;
    soDt: string;
    gioiTinh: GenderEnum;
}
