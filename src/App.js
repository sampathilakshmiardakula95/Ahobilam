import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import TempleHistory from './components/TempleHistory'
import AhobilamNavaNarasimha from './components/AhobilamNavaNarasimha'
import TourPackage from './components/TourPackage'
import Accommodation from './components/Accommodation'
import PhotoGallery from './components/PhotoGallery'
import NewPackageTariff from './components/NewPackageTariff'
import Payment from './components/Payment'
import HowToReach from './components/HowToReach'
import ContactUs from './components/ContactUs'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/temple-history" component={TempleHistory} />
      <Route
        exact
        path="/ahobilam-nava-narasimha"
        component={AhobilamNavaNarasimha}
      />
      <Route exact path="/tour-package" component={TourPackage} />
      <Route exact path="/accommodation" component={Accommodation} />
      <Route exact path="/photo-gallery" component={PhotoGallery} />
      <Route exact path="/new-package-tariff" component={NewPackageTariff} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/how-to-reach" component={HowToReach} />
      <Route exact path="/contact-us" component={ContactUs} />
    </Switch>
  </BrowserRouter>
)

export default App
