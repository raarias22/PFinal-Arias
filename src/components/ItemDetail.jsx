import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCarritoContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    
    const {addItem} = useCarritoContext()
    
    const onAdd = (contador) => {
        addItem(item, contador)
    }   

    return (
        <div className="row g-0 cardBody">
            <div className="col-md-4 imgBody">
                <img src={`../img/${item.img}`} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8" >
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.descripcion} </p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <p className="card-text">Stock: {item.stock} </p>
                    <ItemCount inicial = {1} stock= {item.stock} onAdd={onAdd}/><br/>
                    <button className= "btn btn-primary"><Link to="/cart" className="nav-link">Finalizar compra</Link></button>
                </div>
                
            </div>
            
        </div>
    );
}

export default ItemDetail;