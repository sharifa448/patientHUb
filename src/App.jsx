import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appiontments';
import Chat from './pages/Chat';
import FindMarketPlace from './pages/FindMarketPlace';
import FindPharmacy from './pages/Findpharmacy';
import MyDependents from './pages/MyDependents';
import MyAccount from './pages/MyAccount';
import Settings from './pages/Settings';
import FindClinic from './pages/FindClinic';
import FindDoctor from './pages/FindDoctor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/find-marketplace" element={<FindMarketPlace />} />
        <Route path="/find-pharmacy" element={<FindPharmacy />} />
        <Route path="/my-dependents" element={<MyDependents />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/find-clinic" element={<FindClinic />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;