import { useAppDispatch } from "hooks/store";
import { useEffect } from "react";
import { hideLoading, showLoading } from "store/modules/loadingSlice";

const TriggerLoadingLazy = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(showLoading());

    return () => {
      setTimeout(() => {
        dispatch(hideLoading());
      }, 1500)
    };
  }, []);

  return <div></div>;
};

export default TriggerLoadingLazy;
