import { RootState } from "configStore";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./Loading.css";

const Loading = () => {
    const { isLoading } = useSelector((state: RootState) => state.loading);
    return (
        <Fragment>
            {isLoading ? (
                <div className="loadingio-spinner-spinner-hd458l8xbrs ">
                    <div className="ldio-engoxtquu0e">
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            ) : (
                ""
            )}
        </Fragment>
    );
};

export default Loading;
