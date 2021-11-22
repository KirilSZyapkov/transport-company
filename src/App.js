import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Contacts from './Components/Contacts/Contacts';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contacts" component={Contacts} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
