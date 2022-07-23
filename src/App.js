
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
       <Header/>
      <Routes>

        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/*" element={<PrivateRoute/>}>
          <Route path="dashboard" element={<Dashboard/>} />
        </Route>



      </Routes>
    </div>
  );
}

export default App;
