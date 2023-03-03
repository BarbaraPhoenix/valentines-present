import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Present = ({present}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (<div>
        <img src={`${present.img}.jpg`}/>
        <h2>{present.name}</h2>
        <p>$ {present.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={() => {dispatch(addItemToCart({present, quantity}));
    }}>Add to cart</button>
        </div>)
}

export default Present;