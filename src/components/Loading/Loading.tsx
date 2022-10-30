import { RootState } from "configStore";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./Loading.scss";

const Loading = () => {
  const { isLoading } = useSelector((state: RootState) => state.loading);
  return (
    <Fragment>
      {isLoading ? (
        <div className="loader --global">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Loading;
