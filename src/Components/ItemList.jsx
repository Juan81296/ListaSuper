import { useContext } from "react";
import { ItemContext } from "../Context/ItemContext";
import ItemDetails from "./ItemDetails";

const ItemList = () => {
  const {items} = useContext(ItemContext);

  return items.length ? ( 
    <div className="item-list">
      <ul>
        {items.map(item => {
          return <ItemDetails item={item} key={item.id} />
        })}
      </ul>
    </div>
    )
    : (
    <div className="empty"> Nada que comprar, agrega algo! :) </div>
   )
}
 
export default ItemList;
