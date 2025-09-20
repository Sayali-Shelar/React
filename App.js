// 


import React, { useReducer } from 'react'

const initialState = [];


const reducer = ((state,action)=>{
  switch (action.type){
    case "add":
       const existingItem = state.find((item) => item.id === action.product.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    return [...state, { ...action.product, qty: 1 }];


     case "increase":
      return state.map((item) =>
        item.id === action.id ? { ...item, qty: item.qty + 1 } : item
      );

      case "decrease":
      return state.map((item) =>
        item.id === action.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
   
      case "remove":
      return state.filter((item) => item.id !== action.id);
      case "addToWishlist":
      if (state.find(item => item.id === action.product.id)) return state; // Avoid duplicates
      return [...state, action.product];

      case "removeFromWishlist":
      return state.filter(item => item.id !== action.id);

  }


})


const App = () => {
const [cart, dispatch] = useReducer(reducer, initialState);
// const [carts, dispatchs] = useReducer(reducer, initialState);
const [wishlist, dispatchWishlist] = useReducer(reducer, initialState);
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);


console.log(cart);

  

  const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
];
  return (
    <div>
       <h1>useReducer Example: Shopping Cart</h1>
        <h2>Products</h2>
          {products.map((p) => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => dispatch({ type: "add", product: p })} >
            Add to Cart
          </button>
             <button onClick={() => dispatchWishlist({ type: "addToWishlist", product: p })}>
            ❤️ Wishlist
          </button>
        </div>
      ))}

          <h2>Cart</h2>

           {
            cart.map((p)=>{
              return(
                 <div>
                      {p.name} - {p.qty} x ₹{p.price} = ₹ {p.qty * p.price}

                      <button onClick={() => dispatch({ type: "increase", id: p.id })}> +</button>
                      <button onClick={() => dispatch({ type: "decrease", id: p.id })}>-</button>
                      <button onClick={() => dispatch({ type: "remove", id: p.id })} > ❌ Remove </button>


                 </div>
              )
            })
           }


           
      <h2>Wishlist({wishlist.length}):</h2>
      {wishlist.length === 0 ? <p>No items in wishlist</p> :
        wishlist.map((item) => (
          <div key={item.id}>
            {item.name} - ₹{item.price}
            <button onClick={() => dispatchWishlist({ type: "removeFromWishlist", id: item.id })}>
              ❌ Remove
            </button>
          </div>
        ))
      }


          <h2>Total: ₹{total}</h2>

    </div>
  )
}

export default App
