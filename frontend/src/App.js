import './App.css';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import { BrowserRouter as Router, Route } from "react-router-dom"
//import CounterClass from './components/CounterClass';
//import CounterFunction from './components/CounterFunction';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={AllStudent} />
        <Route path="/add" exact component={AddStudent} />
      </div>
    </Router>
  );
}

export default App;