import logo from './logo.svg';
import Homepage from './components/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className='bg-black w-full h-screen flex justify-center items-center flex-col'>
        <div className=' w-10/12 h-5/6 rounded-xl bg-grey flex items-center justify-center'>
          <Homepage />
        </div>
        <footer className='mt-8 flex w-full justify-between '>
          <div className='bg-white px-1 w-4/12 '></div>
            <p>xcac</p>
            <div className='bg-white px-1 w-4/12 '>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
