import { NavLink } from "react-router-dom";

//component
import RegisterForm from "components/RegisterForm/RegisterForm";

//scss
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="register-wrap col-10 col-sm-10 col-md-8 col-lg-5">
        <div className="text-center">
          <NavLink to="/">
            <img src="./images/logo.png" />
          </NavLink>
          <h2 className="text-center">Register</h2>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
