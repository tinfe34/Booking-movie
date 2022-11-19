import { NavLink } from "react-router-dom";

//component
import RegisterForm from "components/RegisterForm/RegisterForm";

//scss
import "./Register.scss";
import withLoader from "HOC/WrapperLoader";

const Register = () => {
  return (
    <div className="register">
      <div className="register-wrap col-10 col-sm-10 col-md-8 col-lg-5">
        <h2 className="text-center">
          <NavLink to="/">
            <img src="./images/logo.png" />
          </NavLink>
        </h2>
        <h2 className="text-center">Register</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default withLoader(Register);
