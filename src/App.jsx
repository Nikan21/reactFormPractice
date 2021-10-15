import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from './Components/Chat/index'
import "./App.css";
/* import Form from './Components/Form/index' */
/* import Form1 from './Components/Form/index1' */

function App() {
  return (
    <Router>
        <Link to = '/chat'>Chat</Link>
      <Switch>
        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
