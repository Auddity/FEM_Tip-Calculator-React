import './App.css';
import logo from './images/logo.svg'
import Form from './components/Form.js'
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Splitter Logo" />
      </header>
      <main>
        <Form />
        <Display />
      </main>
    </div>
  );
}

export default App;
