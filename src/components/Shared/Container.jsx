import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`${className} w-[90%] mx-auto mt-[5%]`}>{children}</div>
  );
};

export default Container;
