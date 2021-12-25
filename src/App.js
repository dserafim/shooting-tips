import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PrecisionPage from './pages/PrecisionTipPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  document.title = "Поради стрільцям";
  /* <Navigate replace to="/" /> */
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/precision" />}></Route> 
        <Route path="precision" element={<PrecisionPage />}>
          <Route path=":tipId" element={<PrecisionPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
