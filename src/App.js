import logo from './logo.svg';
import Homepage from './components/Homepage';
import {useMemo, useState} from 'react';
import { UserInfoProvider } from './UserInfoContext';
import Main from './components/Main';

import './App.css';

function App() {

  const [token, setToken] = useState(null);

  useMemo(() =>{
    const hash = window.location.hash;
        if (!token && hash) {
           var token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
           localStorage.setItem('token', token)
        }
      setToken(token);
      console.log(token)
  },[token])

  

  return (
    <div className="App">
      <UserInfoProvider>
        <main className={`${token ? 'bg-grey' : 'bg-black'} w-full h-screen flex justify-center items-center flex-col`}>

          {token ? <Main/>:   <Homepage />

          }
          
          
  
          
        </main>
      </UserInfoProvider>
    </div>
  );
}

export default App;