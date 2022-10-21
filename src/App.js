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
function App() {
  var walletAddress
  smartContract.signer.getAddress().then((res) => {
    walletAddress = res
    console.log(res)
  });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login walletAddress={walletAddress} />}></Route>
          <Route path='/welcomeuser' element={<Welcomeuser />}></Route>
          <Route path='/ongoingproject' element={<Ongoing />}></Route>
          <Route path='/token/:id' element={<Userdetail />}></Route>
          <Route path='/vestingpool' element={<Vestingpool />}></Route>
        </Routes>
      </BrowserRouter>





    </div>
  );
}

export default App;