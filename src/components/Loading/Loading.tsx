import { Fragment } from "react";

//hooks
import { useAppSelector } from "hooks/store";

//css
import "./Loading.scss";

const Loading = () => {
  const { isLoading } = useAppSelector((state) => state.loading);

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
