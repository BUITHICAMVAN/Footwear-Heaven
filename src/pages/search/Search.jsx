import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { setProductActionSearching } from "../../redux/reducers/searchingReducer";
import { getApiActionProductSearchingAsync } from "../../redux/reducers/productReducer";
import useSelection from "antd/es/table/hooks/useSelection";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form className="d-flex my-2 my-lg-0" onSubmit={handleSearch}>
        <input
          className="form-control me-sm-2"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <NavLink
          className="btn btn-outline-success my-2 my-sm-0"
          to={`/product?keyword=${searchTerm}`}
        >
          Search
        </NavLink>
      </form>
    </>
  );
};

export default Search;
