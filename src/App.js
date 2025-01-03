import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskManagement from './pages/TaskManagement';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskManagement />} />
      </Routes>
    </Router>
  )

}

export default App;
