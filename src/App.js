import './index.css'
import ItemList from './Components/ItemList';
import Navbar from './Components/Navbar';
import ItemContextProvider from './Context/ItemContext';
import ItemForm from './Components/ItemForm';

function App() {
  return (
    <div>
      <ItemContextProvider>
        <Navbar/>
        <ItemList/>
        <ItemForm />
      </ItemContextProvider>
    </div>
  );
}

export default App;
