import './App.css';
import { Routes, Route,} from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import HomePage from './pages/HomeScreen';
import LeadsPage from './pages/LeadsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ReportsPages from './pages/ReportsPage'

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/leadspage' element={<LeadsPage/>}/>
          <Route path='/analyticspage' element={<AnalyticsPage/>} />
          <Route path='/reportspage' element={<ReportsPages/>} />
        </Routes>
    </div>
  );
}

export default App;
