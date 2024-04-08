import './App.css';
import Navbar from './components/Navbar'
import rasm from './images/al2.jpg'


function App() {
  return (
    <div className="App">
      <img src={rasm} alt="Alhamdulillah" />
      <Navbar />
    </div>
  );
}

export default App;
