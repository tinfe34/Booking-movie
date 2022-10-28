import React from "react";

import { Button } from "antd";
import "./ButtonCustom.scss";

const defaultProps = {
  type: "primary",
  disabled: false,
  width: "100%",
  onClick: () => {},
};

type ButtonCustomProps = typeof defaultProps & {
  type: string;
  disabled: boolean;
  children?: React.ReactNode;
  width: string;
  onClick: Function;
};

const ButtonCustom = ({
  children,
  disabled,
  width,
  onClick,
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
    >
      {children}
    </Button>
  );
};

ButtonCustom.defaultProps = defaultProps;

export default ButtonCustom;
