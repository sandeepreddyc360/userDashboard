import './App.css';
import Login from '../src/pages/Login/Login'
import Welcomeuser from './pages/Welcomeuser/Welcomeuser';
import Ongoing from '../src/pages/Ongoingprojects/OngoingProjects'
import Userdetail from './pages/Userdetail/Userdetail';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Vestingpool from '../src/pages/vestingpool/vestingpool'
import axios from "axios";
import smartContract from './services/smartContract';
import vestingContract from "./services/vestingContract"
import detailsTab from './pages/vestingpool/detailsTab';
function App() {
  var walletAddress;
  vestingContract.signer.getAddress().then((res) => {
    walletAddress = res
    sessionStorage.setItem("WalletAddress",res)
    console.log("res wall", res)
  });

  if (window.ethereum) {
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/welcomeuser' element={<Welcomeuser />}></Route>
          <Route path='/ongoingproject' element={<Ongoing />}></Route>
          <Route path='/token/:id' element={<Userdetail />}></Route>
          <Route path='/vestingpool' element={<Vestingpool />}></Route>

          <Route path="/details" element={<detailsTab />}></Route>
        </Routes>
      </BrowserRouter>





    </div>
  );
  }else{
    window.ethereum.request({ method: 'eth_requestAccounts' });
    return <div className='walletDisconnected'> connect to wallet using metamask extension</div>
  }
}

export default App;
