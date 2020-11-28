import Board1 from './Components/Board1'
import Board2 from './Components/Board2' 
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
function App() {
  return (
    <div >
      <Router>
        <Switch >
          <Route exact path="/">
            <Redirect to="/screen1"/>
          </Route>
          <Route path="/screen1">
            <Board1/>
          </Route>
          <Route exact path="/screen2">
            <Board2/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
