import { useContext } from "react";
import { ItemContext } from "../Context/ItemContext";

const Navbar = () => {
 const {items} =  useContext(ItemContext);

  return ( 
    <div className="navbar">
      <h1>Lista del super</h1>
      <p>{items.lenght >= 1 ? `todavía te quedan ${items.lenght} artículos que comprar`: 'No tenés ningún artículo en tu lista'}</p>
    </div>
   );
}
 
export default Navbar;

{/* <p className="">Todavía te quedan <strong>{items.length}</strong> artículos que comprar </p> */}
