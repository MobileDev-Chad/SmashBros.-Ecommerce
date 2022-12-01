import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, portrait, name, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <section
      className="px-4 my-5 bg-light rounded-3"
    >
      <div className="">
        <button
          className="btn-close float-end"
          aria-label="Close"
          onClick={() => dispatch(removeItem(id))}
        >
          {" "}
        </button>

        <div className="row justify-content-center">
          <div className="col-md-4" key={id}>
            <img
              className="card"
              src={portrait}
              alt={name}
              height="200px"
              width="200px"
            />
          </div>
          <div className="col-md-4">
            <h3>{name}</h3>
            <p className="lead fw-bold">
              {quantity} X ${price} = ${(quantity * price).toFixed(2)}
            </p>
            <button
              className="btn btn-outline-dark me-4"
              onClick={() => {
                if (quantity === 1) {
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(decrementQuantity(id));
              }}
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              className="btn btn-outline-dark me-4"
              onClick={() => dispatch(incrementQuantity(id))}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default CartItem;
