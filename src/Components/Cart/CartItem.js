import dataPresents from "../../data/dataPresents";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {

    console.log(cartItem)

    const presents = dataPresents.find(item => item.id === cartItem.presentId);
    const dispatch = useDispatch();
    console.log(presents)
    return (<div>
        <p>{presents.name}</p>
       <p> {cartItem.quantity} present(s)</p>
       <p>Price: ${presents.price * cartItem.quantity}</p>
       <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className="cartIcon" src="emptyTheTrash.png"/>
       </span> 
    </div>)
}

export default CartItem;