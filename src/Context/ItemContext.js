import { createContext, useEffect, useReducer } from "react";
import { ItemReducer } from "../Reducers/ItemReducer";

export  const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [items, dispatch] = useReducer(ItemReducer,[], () => { 
    const localData = localStorage.getItem('items');
    return localData ? JSON.parse(localData) : []
  } );
  useEffect(() => {
    localStorage.setItem('items',JSON.stringify(items))
  }, [items])
return ( 
  <ItemContext.Provider value={
    {items,
    dispatch
    }}>
    {props.children}
  </ItemContext.Provider>
)
}
 export default ItemContextProvider ;
