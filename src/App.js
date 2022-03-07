import logo from "./logo.svg";
import "./App.css";
{
  /* JSX style comments can go here here*/
}
// JS style comments can also go here
function App() {
  return (
    <div className="App">
      {/*JSX stlye comments go here */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Single line // comments don't seem to work here */}
        {/* HTML stlye comments don't seem to work here either */}

        <p>
          Edit <code>src/App.js</code> file.
        </p>
        <p>Multiple elements must be nested inside a parent div.</p>
        <p>Use npm start to test.</p>
        <p>GoLive doesn't work the same way as with HTML.</p>
        <a
          className="App-link"
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
      </header>
    </div>
  );
}

export default App;
