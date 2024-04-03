import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiActionAsync } from "../../redux/reducers/productReducer";
import { useEffect } from "react";

const useHome = () => {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const getProductApi = async () => {
    const action = getApiActionAsync;
    dispatch(action);
  };
  useEffect(() => {
    getProductApi();
  }, []);
  return { arrProduct };
};

export default useHome;
