import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';
import GetCatalog from './data/GetCatalog';

function App() {
  const goods = GetCatalog();
  const good = goods[0];
  return (
    <div>
      <Card good={good}/>
    </div>
  );
}

export default App;
