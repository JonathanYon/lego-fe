import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMiniFigs } from "../../redux/action";

const MiniFigs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMiniFigs());
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};
export default MiniFigs;
