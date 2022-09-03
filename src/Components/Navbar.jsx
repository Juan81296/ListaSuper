import { useContext } from "react";
import { ItemContext } from "../Context/ItemContext";

const Navbar = () => {
 const {items} =  useContext(ItemContext);

  return ( 
    <div className="navbar">
      <h1>Lista del super</h1>
      <p className="">Todavía te quedan <strong>{items.length}</strong> artículos que comprar </p>
    </div>
   );
}
 
export default Navbar;