import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import{HashRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Header from './components/layout/Header';
import {Provider} from './context'
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import EditContact from './components/contacts/EditContact';

function App() {
  
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header contactManager='Contact Manager' />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Contacts} />
              <Route exact path='/contact/add' component={AddContact} />
              <Route exact path='/contact/edit/:id' component={EditContact} />
              <Route exact path='/about' component={About} />
              <Route  component={NotFound} />
            </Switch> 
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
