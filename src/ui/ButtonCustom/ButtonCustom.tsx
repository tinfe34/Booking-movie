import React from "react";

import { Button } from "antd";
import "./ButtonCustom.scss";

const defaultProps = {
  type: "primary",
  disabled: false,
  width: "100%",
  onClick: () => {},
  className: "",
};

type ButtonCustomProps = typeof defaultProps & {
  type: string;
  disabled: boolean;
  children?: React.ReactNode;
  width: string;
  onClick: Function;
  className: string;
};

const ButtonCustom = ({
  children,
  disabled,
  width,
  onClick,
  className,
}: ButtonCustomProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Button
      type="primary"
      danger
      disabled={disabled}
      style={{
        width: width,
      }}
      onClick={() => handleClick()}
      className={className}
    >
      {children}
    </Button>
  );
};

ButtonCustom.defaultProps = defaultProps;

export default ButtonCustom;
