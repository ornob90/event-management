import React from "react";

const Container = ({ children, className }) => {
  return <div className={`${className} w-[90%] mx-auto`}>{children}</div>;
};

export default Container;
