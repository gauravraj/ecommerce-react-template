import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../components/Pages/Home/Home';
import ReusableStore from '../components/Pages/ReusableStore/ReusableStore';
import SharingStore from '../components/Pages/SharingStore/SharingStore';
import BuybackStore from '../components/Pages/BuybackStore/BuybackStore';
import PDP from '../components/Pages/PDP/PDP';
import ShareClothes from '../components/Pages/ShareClothes/ShareClothes';
import Cart from '../components/Pages/Cart/Cart';
import OrderSuccessful from '../components/Pages/Orders/OrderSuccessful';
import Orders from '../components/Pages/Orders/Orders';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MainContainer() {
    return (
      <div>
        <Router>
          <Header />

          <div style={{minHeight: "800px", backgroundColor: "white", overflow: "scroll", paddingBottom: "20px"}}>
            <Switch>
              <Route path="/reusable-store">
                <ReusableStore />
              </Route>
              <Route path="/sharing-center">
                <SharingStore />
              </Route>
              <Route path="/buyback-store">
                <BuybackStore />
              </Route>
              <Route path="/pdp">
                <PDP />
              </Route>
              <Route path="/share-clothes">
                <ShareClothes />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
              <Route path="/order-successful">
                <OrderSuccessful />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>  

          <Footer />
        </Router>
      </div>
    );
}
  
export default MainContainer;
  