import logo from './logo.svg';
import Homepage from './components/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className='bg-black w-full h-screen flex justify-center items-center'>
        <div className=' w-10/12 h-5/6 rounded-xl bg-grey flex items-center justify-center'>
          <Homepage />
        </div>

      </main>
    </div>
  );
}

export default App;
