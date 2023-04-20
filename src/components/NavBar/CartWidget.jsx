import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()

    return (
        <>
            <button className="btn btn-primary cartWidget">
                    <Link to={'/cart'} className="nav-link">
                        <i className="fas fa-shopping-cart fa-lg"></i>
                        {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
                    </Link>
                        
            </button>
            
        </>
    );
}

export default CartWidget;