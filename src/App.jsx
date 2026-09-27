import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FindDoctor from './pages/FindDoctor';
import FindClinic from './pages/FindClinic';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/find-clinic" element={<FindClinic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;