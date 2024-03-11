import { Outlet } from 'react-router-dom';

import logo from './logo.svg'
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Outlet />
    </div>
  );
}

export default App;
