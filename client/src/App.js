import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nomes from './components/Nomes';
import Apelidos from './components/Apelidos';
import GerarNomes from './components/GerarNomes';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <div className="container">
            <Switch>
              <Route path="/adicionar-nome" component={Nomes} />
              <Route path="/adicionar-apelido" component={Apelidos} />
              <Route path="/gerar-nomes" component={GerarNomes} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
