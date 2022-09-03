import { useContext } from "react";
import { ItemContext } from "../Context/ItemContext";

const ItemDetails = ({item}) => {
  const {dispatch} = useContext(ItemContext);

  return ( 
    <li onClick={()=>dispatch({type: 'REMOVE_ITEM', id:item.id})}>
      <div className="title"> {item.title} </div>
    </li>
   );
}
 
export default ItemDetails;