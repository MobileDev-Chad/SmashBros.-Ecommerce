import CartItem from "../cartitem/CartItem";
import Total from "../total/Total";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container my-5 py-5" id="characters">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center ">Cart</h1>
            <hr />
            <button
              className="btn btn-danger ms-3 float-end "
              onClick={() => dispatch(clearCart(cart))}
            >
              <i className="fa fa-ban me-1"></i> Clear Cart
            </button>
          </div>
        </div>

        <div className="row justify-content-center">
          {cart?.map((item) => (
            <CartItem
              id={item.id}
              portrait={item.portrait}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
      <div className="container col-12 mb-5  fixed-bottom">
        <h1 className="display-6 fw-bolder text-center">
          <Total totalQuantity={0} />
        </h1>
      </div>
    </>
  );
};

export default Cart;
