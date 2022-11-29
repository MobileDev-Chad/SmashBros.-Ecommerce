// import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';
// import { useDispatch } from 'react-redux'

// const CartItem = ({id, images, name, series}) => {
//     return (
//       <section className="px-4 my-5 bg-light rounded-3" key={id} >
//         <div className=" py-4">
//           <button className="btn-close float-end" aria-label="Close">
//             <div className="row justify-content-center">
//               <div className="col-md-4">
//                   <img
//                   src={images.portrait}
//                   alt={name}
//                   height="200px"
//                   width="200px"
//                 />  
//               </div>
//               <div className="col-md-4">
//                 <h3>{name}</h3>
//                 <p>{series.price}</p>
//               </div>
//             </div>
//           </button>
//         </div>
//       </section>
//     );
//   };

//   export default CartItem;