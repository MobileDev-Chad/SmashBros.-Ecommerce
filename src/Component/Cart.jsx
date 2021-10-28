// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import {delItem} from '../redux/actions/index'

// const Cart = () => {
//   const state = useSelector((state) => state.addItem);
//   const dispatch = useDispatch();

//   const cartItems = (cartItem) => {
//     return (
//       <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id} >
//         <div className=" py-4">
//           <button className="btn-close float-end" aria-label="Close">
//             <div className="row justify-content-center">
//               <div className="col-md-4">
//                   <img
//                   src={cartItem.images.portrait}
//                   alt={cartItem.name}
//                   height="200px"
//                   width="200px"
//                 />  
//               </div>
//               <div className="col-md-4">
//                 <h3></h3>
//                 <p></p>
//               </div>
//             </div>
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return <>{state.length !== 0 && state.map(cartItems)}</>;
// };

// export default Cart;
