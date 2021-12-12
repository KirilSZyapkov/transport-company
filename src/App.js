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
import SeaTransport from './Components/SeaTransport/SeaTransport';
import AirTransport from './Components/AirTransport/AirTransport';
import IntermodalTransport from './Components/IntermodalTransport/IntermodalTransport';
import Warehouse from './Components/Warehouse/Warehouse';
import NotFound from './Components/404/NotFound';

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
        <Route path="/sea-transport" component={SeaTransport} />
        <Route path="/air-transport" component={AirTransport} />
        <Route path="/intermodal" component={IntermodalTransport} />
        <Route path="/logistics" component={Warehouse} />
        <Route path="*" component={NotFound} />
        
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
