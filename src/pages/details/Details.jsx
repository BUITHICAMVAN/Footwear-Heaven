import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiActionProductDetailAsync } from "../../redux/reducers/productReducer";
import { NavLink, useParams } from "react-router-dom";
import { addToCart, changeQuantity, changeQuantityInput } from "../../redux/reducers/productCart";

const Details = () => {
  const { productDetail } = useSelector((state) => state.productReducer);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const params = useParams();

  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {};
  useEffect(() => {
    const getApiProductDetail = async () => {
      const action = getApiActionProductDetailAsync(params.id);
      await dispatch(action);
      setLoading(false);
    };

    if (!productDetail || productDetail.id !== params.id) {
      setLoading(true);
      getApiProductDetail();
    }
  }, [dispatch, params.id, productDetail]);

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {productDetail && (
        <div className="row">
          <div className="col-5">
            <img src={productDetail.image} alt={productDetail.name} />
          </div>
          <div className="col-7 detail__custom">
            <h4>{productDetail.name}</h4>
            <p>{productDetail.description}</p>
            <div>
              <button
                onClick={() => {
                  const action = changeQuantity({
                    id: productDetail.id,
                    quantity: 1,
                  });
               dispatch(action);
                }}
              >
                -
              </button>
              <input
                className=""
                min={1}
                max={100}
                style={{ width: 70, textAlign: "center" }}
                value={productDetail.quantity}
                onInput={(event) => {
                  const { value } = event.target;
                  const action = changeQuantityInput({
                    id: productDetail.id,
                    value,
                  });
                  dispatch(action);
                }}
              />
              <button>+</button>
            </div>
            <button className="btn btn-dark"
            onClick={()=>{
                const action =addToCart(productDetail)
                dispatch(action)
            }}>
              <i className="fa fa-cart-plus "></i> Add to cart
            </button>
          </div>
          <div className="row mt-2">
            <h3>Related Products</h3>
            {productDetail.relatedProducts?.map((prod) => (
              <div className="col-4" key={prod.id}>
                <div className="card">
                  <img src={prod.image} alt={prod.name} />
                  <div className="card-body">
                    <h3>{prod.name}</h3>
                    <p>{prod.price} $</p>
                    <NavLink
                      to={`/detail/${prod.id}`}
                      className="btn btn-primary"
                    >
                      Detail
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
