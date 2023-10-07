import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <h1 className="text-5xl font-bold my-8 mb-12">{title}</h1>
    </div>
  );
};

export default SectionHeader;
