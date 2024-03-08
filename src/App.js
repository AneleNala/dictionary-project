import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1 className="text-center">Dictionary</h1>
      </header>
        <Dictionary defaultKeyword="sunset"/>
      <footer className="App-footer">
        This is coded by Anele open sourced on GitHub
      </footer>
    </div>
  );
}

export default App;
