import React, { useState } from "react";
import { number } from "yup/lib/locale";
import noImage from "../../../src/assets/images/no-image.jpg";

const defaultProps = {
  src: "",
  alt: "",
  style: {},
  width: '',
  height: ''
};

type ImageProps = {
  src: any;
  alt: any;
  style: any;
  width: any;
  height: any;
};

const Image = ({ src, alt, style, width, height }: ImageProps) => {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(noImage);
  };

  return (
    <img
      src={fallback || src}
      alt={alt}
      onError={handleError}
      style={style}
      width={width}
      height={height}
    />
  );
};

Image.defaultProps = defaultProps;

export default Image;
