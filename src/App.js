import "./App.css";
import Navi from "./layout/Navi";
import "semantic-ui-css/semantic.min.css";
import Footer from "./layout/Footer";
import Dashboard from './layout/Dashboard';
import {Container} from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
