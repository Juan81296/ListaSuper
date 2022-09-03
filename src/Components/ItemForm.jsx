import { useContext, useState } from "react";
import { ItemContext } from "../Context/ItemContext";

const ItemForm = () => {
  const {dispatch} = useContext(ItemContext);
  const [title,setTitle] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch({type: 'ADD_ITEM', item: {
      title
    } });
    setTitle('');
  } 

  return ( 
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder="Nuevo producto"
      value={title}
      onChange={(e)=> setTitle(e.target.value)
      } required
      />
      <input type='submit' value="Add Item"/>
    </form>
   );
}
 
export default ItemForm;