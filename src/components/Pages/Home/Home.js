import Banner from '../../Banner/Banner';

import ElegantDress from '../../ProductCards/ElegantDress/ElegantDress';
import ProductCard from '../../ProductCards/Products/ProductCard';
import WhiteDress from '../../ProductCards/WhiteDress/WhiteDress';
import ShinyDress from '../../ProductCards/ShinyDress/ShinyDress';
import RedDress from '../../ProductCards/RedDress/RedDress';
import Products from '../../ProductCards/Products/Products';
import { Link } from 'react-router-dom';

import { products } from "../../../data/products";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="wrapper">
            <div className="section">
                <Link to={{pathname: '/pdp', state: {key: "hello"} }}><ElegantDress /></Link>
                <ProductCard product={products[3]} />
                <WhiteDress />
            </div>
            </div>
            <div className="wrapper">
            <div className="section">
                <ShinyDress />
                <RedDress />
            </div>
            </div>
            {/* <Collections /> */}
            <Products productList={products} title={"Best Sellers"} />
        </div>
    );
};
    
export default Home;