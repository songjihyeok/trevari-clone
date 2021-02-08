import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from './containers/Main/Main'
import PostDetail from './containers/post_detail/post_detail'

function App() {
  return (
    <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/postdetail" component={PostDetail} />
          </Switch>
    </div>
  );
}

export default App;
