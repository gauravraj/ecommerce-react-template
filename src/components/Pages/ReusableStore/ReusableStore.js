import Products from '../../ProductCards/Products/Products';
import { reusableStoreProducts } from '../../../data/products';

const ReusableStore = () => {
    return (
        <div>
            <Products productList={reusableStoreProducts} title={"Clothes made of recyclable material"} />
        </div>
    );
};
    
export default ReusableStore;