import { Fragment, useEffect } from "react";

//hooks
import { useAppSelector } from "hooks/store";

//css
import "./Loading.scss";

const Loading = () => {
  const { isLoading } = useAppSelector((state) => state.loading);
  
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <Fragment>
      {isLoading && (
        <div className="loader --global">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Loading;
