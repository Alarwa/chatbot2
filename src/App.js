import './App.css';
import Sidebar from './Components/Sidebar';
import Prior from './Components/Prior';
import Questions from './Components/Questions';
import Feedback from './Components/Feedback';
import Task from './Components/Task';
import ChatBot from './Components/Chatbot';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
      <Switch>
      <Route exact path="/Prior">
      <Prior/>
      </Route>
      <Route exact path="/">
      <Prior/>
      </Route>
      <Route exact path="/Questions">
      <Questions/>
      </Route>
      <Route exact path="/Task">
      <Task/>
      </Route>
      <Route exact path="/Feedback">
      <Feedback/>
      </Route>
      </Switch>
    </Router >
    <ChatBot/>
    </div >
  );
  
}

export default App;

