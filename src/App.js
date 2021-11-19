import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
