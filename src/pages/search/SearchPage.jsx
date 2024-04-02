import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { getApiActionProductSearchingAsync } from "../../redux/reducers/searchingReducer";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");

  const dispatch = useDispatch();
  const arrProductSearching = useSelector(
    (state) => state.productSearching.arrProductSearching
  );

  useEffect(() => {
    dispatch(getApiActionProductSearchingAsync(keyword));
  }, [dispatch, keyword]);

  return (
    <div className="container text-center">
      <h2>Sản Phẩm tìm kiếm</h2>
      <div className="row">
        {arrProductSearching.map((prod) => (
          <div className="col-md-4 mt-2" key={prod.id}>
            <div className="card">
              <img src={prod.image} alt="..." />
              <div className="card-body">
                <h3>{prod.name}</h3>
                <div className="row">
                  <div className="col-4">
                    <NavLink
                      to={`/detail/${prod.id}`}
                      className={"btn btn-dark"}
                    >
                      View detail
                    </NavLink>
                  </div>
                  <div className="col-8">
                    <h3>{prod.price} $</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
