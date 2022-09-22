import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import InputForm from './components/InputForm'
import Source from './components/Source';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <InputForm />
        <Source 
        number={1}
        name="Presbo"
        email = "presbo@columbia.edu"
        />
        <Source 
        number={2}
        name="Mouse"
        email = "mouse@columbia.edu"
        />
        <Source
        number={3}
        name="Water Bottle Man"
        email = "water@columbia.edu" 
        />
      </main>
    </div>
  );
}

export default App;
