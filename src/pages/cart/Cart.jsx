import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemCart } from "../../redux/reducers/productCart";
import { NavLink } from "react-router-dom";


const Cart = () => {
  const { arrProductCart } = useSelector((state) => state.productCartReducer);
   const renderTotal = (prod) => {
    return prod.price * prod.quantity;
  };
  const dispatch = useDispatch();
  const renderTotalALL = () => {
    return arrProductCart
      .reduce((total, prod) => {
        return total + prod.price * prod.quantity;
      }, 0)
      .toLocaleString();
    // ,0 là giá trị khởi tạo
  };
  return (
    <div className="container">
      <h3>Giỏ Hàng</h3>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>quatity</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrProductCart.map((prod) => {
            return (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>
                  <img src={prod.image} alt=".." style={{ width: 50 }}></img>
                </td>
                <td>{prod.name}</td>
                <td>{prod.price} $</td>
                <td>{prod.quantity}</td>
                <td>{renderTotal(prod)} $</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      const action = deleteItemCart(prod.id);
                      dispatch(action);
                    }}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3 style={{ textAlign: "right", marginRight: "30px" }}>
        Tổng tiền : {renderTotalALL()}
      </h3>
      <div className="text-right" style={{ width: 200, marginLeft: "auto" }}>
        <button className="btn btn-success">
          <NavLink to="/purchase">Thanh toán</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Cart;
