import CartItem from './CartItem';
import Total from './Total'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  <div className="cart__left">
  <div>
    <h3>Shopping Cart</h3>
    {cart?.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        image={item.images.portrait}
        name={item.name}
        price={item.series.price} 
        quantity={item.quantity}
      />
    ))}
  </div>

  <div className="cart__right">
        <Total/>
      </div>

</div>

};

export default Cart;
