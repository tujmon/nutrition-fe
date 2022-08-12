import {
  Route, Routes,
} from 'react-router-dom';
import DashboardNutricionista from '../DashboardNutricionista';
import DashboardCliente from '../DashboardCliente';
import CadastroNutricionista from '../CadastroNutricionista';

function App() {
  return (
    <Routes>
      <Route path="nutricionist" element={<DashboardNutricionista />} />
      <Route path="client" element={<DashboardCliente />} />
      <Route path="cadastro" element={<CadastroNutricionista />} />
    </Routes>
  );
}

export default App;
