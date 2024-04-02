import React from "react";
import useHome from "./useHome";
import { NavLink } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";

const HomePage = () => {
  const { arrProduct } = useHome();

  return (
    <div className="container-fluid">
      <Carousel arrProduct={arrProduct} />
      <div className="container">
        <h3 className="text-center">Product Feature</h3>
        <div className="row">
          {arrProduct.map((prod) => {
            return (
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
