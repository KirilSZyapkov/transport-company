import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Contacts from './Components/Contacts/Contacts';
import AboutUs from './Components/AboutUs/AboutUs';
import Partners from './Components/Partners/Partners';
import Career from './Components/Career/Career';
import Specialist from './Components/YongSpcialist/Specialist';
import RoadTransport from './Components/RoadTransport/RoadTransport';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/partners" component={Partners} />
        <Route exact path="/career" component={Career} />
        <Route path="/career/specialist" component={Specialist} />
        <Route path="/road-transport" component={RoadTransport} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
