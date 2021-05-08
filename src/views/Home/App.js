import { useHistory } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  let history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Setup and Architecture for a React App</p>
        <span className="App-link" onClick={() => history.push('/Todos')}>
          React Query Todo
        </span>
      </header>
    </div>
  );
}

export default App;
