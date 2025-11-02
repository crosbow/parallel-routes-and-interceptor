"use client";

const Error = ({ error }) => {
  return <div className="text-red-600">{error.message} </div>;
};
export default Error;
