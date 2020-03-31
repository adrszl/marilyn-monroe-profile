import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import LandingView from './components/LandingView';
import './App.scss';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
        <Navbar />
        <Switch>
          <React.Fragment>
            <main>
              <Route path="/profile" component={Profile} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/" exact component={LandingView} />
            </main>
          </React.Fragment>
        </Switch>
    </Provider>
  );
}

export default App;
