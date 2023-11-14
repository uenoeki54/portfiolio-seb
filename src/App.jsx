import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import './assets/main.scss';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:skillId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
