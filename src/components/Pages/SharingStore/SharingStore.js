import Products from '../../ProductCards/Products/Products';
import { sharingStoreProducts } from '../../../data/products';

const SharingStore = () => {
    return (
        <div>
            <Products productList={sharingStoreProducts} title={"Clothes available for sharing"} />
        </div>
    );
};
    
export default SharingStore;