import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './i18n';
import AppContent from './AppContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/es' />} />
        <Route path='/:lang' element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
