// import CartItem from './CartItem';
// import Total from './Total'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
    <div className="col-md 5 d-flex justify-content-center">
  <div>
    <h3 className="mt-5">Shopping Cart</h3>
    {/* {cart?.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        image={item.images.portrait}
        name={item.name}
        price={item.series.price} 
        quantity={item.quantity}
      />
    ))} */}
  </div>

  {/* <div className="cart__right">
        <Total/>
      </div> */}

</div>
    </>
  )

};

export default Cart;
