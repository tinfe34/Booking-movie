import { NavLink } from "react-router-dom";

//component
import LoginForm from "components/LoginForm/LoginForm";

//scss
import "./Login.scss";
import withLoader from "HOC/WrapperLoader";

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrap col-10 col-sm-10 col-md-6 col-lg-4">
        <h2 className="text-center">
          <NavLink to="/">
            <img src="./images/logo.png" />
          </NavLink>
        </h2>
        <h2 className="text-center">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default withLoader(Login);
