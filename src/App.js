import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Layout from "./screens/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout/>
      </Router>
    </div>
  );
}

export default App;
