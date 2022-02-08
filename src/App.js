import './App.css';
import Catalog from './components/catalog/Catalog';
import GetCatalog from './data/GetCatalog';

function App() {
  const goods = GetCatalog();
  return (  
      <Catalog goods={goods} />
  );
}

export default App;
