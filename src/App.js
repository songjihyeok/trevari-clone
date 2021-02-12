import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from './containers/Main/Main'
import PostDetail from './containers/post_detail/post_detail'
import Login from './containers/login_main/login_main'

function App() {
  return (
    <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/postdetail" component={PostDetail} />
            <Route path="/login" component={Login} />
          </Switch>
    </div>
  );
}

export default App;
