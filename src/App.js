import Dashboard from 'pages/Dashboard';
import ForgetPassword from 'pages/ForgetPassword';
import Login from 'pages/Login';
import UsersGeneralDetails from 'pages/UsersGeneralDetails';
import UsersShowingFilters from 'pages/UsersShowingFilters';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/usersFilters' element={<UsersShowingFilters/>}/>
        <Route path='/generalDetails' element={<UsersGeneralDetails/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>

      </Routes>
    </div>
  );
}

export default App;
