import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App_principal from './pages/App_principal';
import Ajout_taches from './pages/Ajout_taches';

const App : React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App_principal />}></Route>
          <Route path="/ajout" element={<Ajout_taches />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
