import Dashboard from 'pages/Dashboard';
import ForgetPassword from 'pages/ForgetPassword';
import Guarantors from 'components/blankPage/Guarantors';
import Login from 'pages/Login';
import UsersGeneralDetails from 'pages/UsersGeneralDetails';
import UsersShowingFilters from 'pages/UsersShowingFilters';
import Loans from 'components/blankPage/Loans';
import DecisionModels from 'components/blankPage/DecisionModels';
import Savings from 'components/blankPage/Savings';
import LoanRequests from 'components/blankPage/LoanRequests';
import Whitelist from 'components/blankPage/Whitelist';
import Karma from 'components/blankPage/Karma';
import Organization from 'components/blankPage/Organization';
import LoanProducts from 'components/blankPage/LoanProducts';
import SavingsProducts from 'components/blankPage/SavingsProducts';
import FeesAndCharges from 'components/blankPage/FeesAndCharges';
import Transactions from 'components/blankPage/Transactions';
import Services from 'components/blankPage/Services';
import ServiceAccount from 'components/blankPage/ServiceAccount';
import Settlement from 'components/blankPage/Settlement';
import Reports from 'components/blankPage/Reports';
import Preferences from 'components/blankPage/Preferences';
import FeesAndPricing from 'components/blankPage/FeesAndPricing';
import AuditLogs from 'components/blankPage/AuditLogs';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SwitchOrganization from 'components/blankPage/SwitchOrganization';
import SignUp from 'pages/SignUp';
// import UserDetails from 'pages/UserDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/usersFilters' element={<UsersShowingFilters/>}/>
        <Route path='/generalDetails' element={<UsersGeneralDetails/>}/>
        {/* <Route path='/generalDetails/:id' element={<UsersGeneralDetails/>}/> */}
        {/* <Route path='/generalDetails/:id' element={<UserDetails/>}/> */}
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/guarantors' element={<Guarantors/>}/>
        <Route path='/loans' element={<Loans/>}/>
        <Route path='/decision-models' element={<DecisionModels/>}/>
        <Route path='/savings' element={<Savings/>}/>
        <Route path='/loan-requests' element={<LoanRequests/>}/>
        <Route path='/whitelist' element={<Whitelist/>}/>
        <Route path='/karma' element={<Karma/>}/>
        <Route path='/organization' element={<Organization/>}/>
        <Route path='/loan-products' element={<LoanProducts/>}/>
        <Route path='/savings-products' element={<SavingsProducts/>}/>
        <Route path='/fees-charges' element={<FeesAndCharges/>}/>
        <Route path='/transactions' element={<Transactions/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/service-account' element={<ServiceAccount/>}/>
        <Route path='/settlement' element={<Settlement/>}/>
        <Route path='/reports' element={<Reports/>}/>
        <Route path='/preferences' element={<Preferences/>}/>
        <Route path='/fees-pricing' element={<FeesAndPricing/>}/>
        <Route path='/audit-logs' element={<AuditLogs/>}/>
        <Route path='/switch-org' element={<SwitchOrganization/>}/>

      </Routes>
    </div>
  );
}

export default App;
