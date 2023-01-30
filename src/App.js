import Dashboard from 'pages/Dashboard';
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
      </Routes>
    </div>
  );
}

export default App;
