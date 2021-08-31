import Products from '../../ProductCards/Products/Products';
import { products } from '../../../data/products';

const BuybackStore = () => {
    return (
        <div>
            <Products productList={products} title={"Clothes with buyback clause"} />
        </div>
    );
};
    
export default BuybackStore;