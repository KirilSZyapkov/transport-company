import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Contacts from './Components/Contacts/Contacts';
import AboutUs from './Components/AboutUs/AboutUs';
import Partners from './Components/Partners/Partners';
import Career from './Components/Career/Career';
import Specialist from './Components/YongSpcialist/Specialist';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route path="/partners" component={Partners} />
        <Route  exact path="/career" component={Career} />
        <Route  exact path="/career/specialist" component={Specialist} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
