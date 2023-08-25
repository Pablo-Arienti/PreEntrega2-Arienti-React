import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul className="ItemLista">
            <li >
                <Link to="category/Procesador"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Motherboard">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Almacenamiento">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/RAM">
                    {props.itemCuatro}
                </Link>
            </li>
            <li>
                <Link to="category/Placa-de-video">
                    {props.itemCinco}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;

