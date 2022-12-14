import { NavLink } from "react-router-dom";

//component
import LoginForm from "components/LoginForm/LoginForm";

//scss
import "./Login.scss";
import Image from "ui/Image/Image";

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrap col-10 col-sm-10 col-md-6 col-lg-4">
        <div className="text-center">
          <NavLink to="/">
            <Image src="./images/logo.png" />
          </NavLink>
          <h2>Login</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
