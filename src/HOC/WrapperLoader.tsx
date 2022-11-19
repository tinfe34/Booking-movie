import { useAppDispatch, useAppSelector } from "hooks/store";
import { useEffect } from "react";
import Loading from "components/Loading/Loading";
import { hideLoading, showLoading } from "store/modules/loadingSlice";

type IComponentWithLoader = {
  [x: string]: any;
};

function withLoader(WrappedComponent: Function): Function {
  function ComponentWithLoader(props: IComponentWithLoader): JSX.Element {
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state) => state.loading);

    useEffect(() => {
      dispatch(showLoading());

      setTimeout(() => {
        dispatch(hideLoading());
      }, 500);
    }, []);

    return isLoading ? <Loading /> : <WrappedComponent {...props} />;
  }

  return ComponentWithLoader;
}

export default withLoader;
