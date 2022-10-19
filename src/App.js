import logo from './logo.svg';
import './App.css';

import MyHeader from "./MyHeader";
import Counter from "./Counter";
import Container from "./Container";

function App() {
    const counterProps = {
        a:1,
        b:2,
        c:3,
        d:4,
        initialValue: 5,
    }

  return (
      <Container>
        <div className="App">
          <MyHeader />
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
            <Counter {...counterProps} />
        </div>
      </Container>
  );
}

export default App;
