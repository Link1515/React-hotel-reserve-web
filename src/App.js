import { Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import RoomDetail from './pages/RoomDetail';
import NotFound from './pages/NotFound';
// components
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/room/:roomId" element={<RoomDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
