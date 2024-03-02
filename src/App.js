import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Screen/Login';
import CreateGrievance from './Screen/CreateGrievance';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Login/>} /> */}
        <Route path='/login' element={<Login/>} />
        <Route path='/agent/create-grievance' element={<CreateGrievance/>} />
      </Routes>
    </div>
  );
}

export default App;
