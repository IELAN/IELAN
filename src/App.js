import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="AppImane">
      <header className="App-header">

      <p>
        Learn React IMANE
        </p>
        
          <form>
          <label> Nom :
          <input type="text" name="name" />
          </label>
          <label> Prénom :
          <input type="text" name="firstname" />
          </label>
          <label> Date de naissance :
          <input type="date" name="birthday" />
          </label>
          <input type="submit" value="Ok" />
          </form>


        
      </header>
      </div>   
  );
}

export default App;
