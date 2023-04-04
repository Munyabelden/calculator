import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Layout from './components/navbar';
import Calculator from './components/calculator';
import Qoute from './components/displayQoute';

function App() {
  return (
    <div className="App">
      <Layout/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="quote" element={ <Qoute /> } />
        <Route path="calculator" element={ <Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
