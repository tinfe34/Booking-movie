import { AppDispatch } from "configStore";
import { LoginValues, RegisterValues } from "interface/login";
import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "slices/auth";
import Swal from "sweetalert2";

const Register = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterValues>({
        // Khai báo giá trị mặc định cho các input trong form
        defaultValues: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            gioiTinh: undefined,
        },
        // mode: cách validation được trigger (default là submit)
        mode: "onTouched",
    });

    const onSubmit = async (values: RegisterValues) => {
        try {
            await dispatch(registerUser(values))
                .unwrap()
                .then((result) => {
                    console.log(result);
                    if (result.taiKhoan) {
                        Swal.fire({
                            icon: "info",
                            title: "Đăng ký thành công",
                        });
                        navigate("/login");
                    } else {
                        Swal.fire({
                            icon: "warning",
                            title: result,
                        });
                    }
                });
        } catch (error) {
            throw error;
        }
    };

    const onError = (error: FieldErrors<RegisterValues>) => {
        console.log(error);
    };

    return (
        <div className="register">
            <div className="registerForm col-10 col-sm-10 col-md-8 col-lg-5">
                <h2 className="text-center">
                    <NavLink to="/">
                        <img src="./images/logo.png" />
                    </NavLink>
                </h2>
                <h2 className="text-center">Register</h2>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="form-group row">
                        <div className="col-12 col-sm-6">
                            <input
                                {...register("taiKhoan", {
                                    // validations
                                    required: {
                                        value: true,
                                        message: "Tài khoản không được để trống",
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9]{5,}$/,
                                        message: "Tài khoản gồm các kí tự hoa, thường, số và ít nhất 5 ký tự",
                                    },
                                })}
                                type="text"
                                placeholder="Tài khoản"
                                className="form-control input__line"
                            />
                            {errors.taiKhoan && <span className="text-danger">{errors.taiKhoan?.message}</span>}
                        </div>
                        <div className="col-12 col-sm-6">
                            <input
                                {...register("matKhau", {
                                    required: {
                                        value: true,
                                        message: "Mật khẩu không được để trống",
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message: "Mật khẩu ít nhất 1 chữ cái, 1 số và ít nhất 8 kí tự",
                                    },
                                })}
                                type="password"
                                placeholder="Mật khẩu"
                                className="form-control input__line"
                            />
                            {errors.matKhau && <span className="text-danger">{errors.matKhau?.message}</span>}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-12 col-sm-6">
                            <input
                                {...register("hoTen", {
                                    required: {
                                        value: true,
                                        message: "Họ tên không được để trống",
                                    },
                                })}
                                type="text"
                                placeholder="Họ tên"
                                className="form-control input__line"
                            />
                            {errors.hoTen && <span className="text-danger">{errors.hoTen?.message}</span>}
                        </div>
                        <div className="col-12 col-sm-6">
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email không được để trống",
                                    },
                                })}
                                type="email"
                                placeholder="Email"
                                className="form-control input__line"
                            />
                            {errors.email && <span className="text-danger">{errors.email?.message}</span>}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-12 col-sm-6">
                            <select
                                {...register("gioiTinh", {
                                    required: {
                                        value: true,
                                        message: "Bạn chưa chọn giới tính",
                                    },
                                })}
                                className="form-control input__line"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Giới Tính
                                </option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                                <option value="other">Khác...</option>
                            </select>
                            {errors.gioiTinh && <span className="text-danger">{errors.gioiTinh?.message}</span>}
                        </div>
                        <div className="col-12 col-sm-6">
                            <input
                                {...register("soDt", {
                                    required: {
                                        value: true,
                                        message: "Số điện thoại không được để trống",
                                    },
                                })}
                                type="text"
                                placeholder="Số điện thoại"
                                className="form-control input__line"
                            />
                            {errors.soDt && <span className="text-danger">{errors.soDt?.message}</span>}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <button type="submit" className="buttonRegister">
                                Register
                            </button>
                        </div>
                        <div
                            className="col-sm-12 row"
                            style={{ alignItems: "center", justifyContent: "center", margin: "20px 0" }}
                        >
                            <NavLink to="/login" className="registerLink">
                                {" "}
                                Sign in now!
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
