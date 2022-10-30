import { AppDispatch, RootState } from "configStore";
import { LoginValues } from "interface/login";
import { FieldErrors, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { getLogin } from "slices/auth";
import Swal from "sweetalert2";
import { USERLOGIN } from "ultis/setting";

//scss
import './Login.scss';

const Login = () => {
  const { user, error } = useSelector((state: RootState) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched",
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (values: LoginValues) => {
    dispatch(getLogin(values));
    console.log(values);
  };

  const onError = (error: FieldErrors<LoginValues>) => {
    console.log(error);
  };
  const navigate = useNavigate();

  if (user) {
    navigate(-1);
  }

  return (
    <div className="login">
      <div className="loginForm col-10 col-sm-10 col-md-6 col-lg-4">
        <h2 className="text-center">
          <NavLink to="/">
            <img src="./images/logo.png" />
          </NavLink>
        </h2>
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="form-group row">
            <div className="col-sm-12">
              <input
                {...register("taiKhoan", {
                  required: {
                    value: true,
                    message: "Tài khoản không được để trống",
                  },
                })}
                type="text"
                placeholder="Tài khoản"
                className="form-control input__line"
              />
              {errors.taiKhoan && (
                <span className="text-danger">{errors.taiKhoan?.message}</span>
              )}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12">
              <input
                {...register("matKhau", {
                  required: {
                    value: true,
                    message: "Tài khoản không được để trống",
                  },
                })}
                type="password"
                placeholder="Mật khẩu"
                className="form-control input__line"
              />
              {errors.matKhau && (
                <span className="text-danger">{errors.matKhau?.message}</span>
              )}
            </div>
          </div>
          <div className="form-group row" style={{ alignItems: "center" }}>
            <div className="col-7">
              <a className="forgotPassword" href="#">
                Forgot your password?
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-5">
              <button type="submit" className="buttonLogin ">
                Sign in
              </button>
            </div>
            <div
              className="col-sm-12 row"
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: "20px 0",
              }}
            >
              <p>
                Don't have account?
                <NavLink to="/register" className="registerLink">
                  {" "}
                  Sign up now!
                </NavLink>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
