import { FieldErrors, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

//interface
import { LoginValues } from "interface/login";

//slice
import { getLogin } from "store/modules/auth";

//hooks
import { useAppDispatch, useAppSelector } from "hooks/store";

type Props = {};

const LoginForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

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
    <form className="login-form" onSubmit={handleSubmit(onSubmit, onError)}>
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
          <a className="forgot-password" href="#">
            Forgot your password?
          </a>
        </div>
        <div className="col-12 col-sm-12 col-md-5">
          <button type="submit" className="button-login ">
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
            <NavLink to="/register" className="register-link">
              Sign up now!
            </NavLink>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
