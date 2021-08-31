import {useLocation} from 'react-router-dom';
import DressProduct from '../../ProductCards/DressProduct/DressProduct';

const PDP = (props) => {

    const location = useLocation();

    const {product} = location.state;

    return (
        <div>
            <DressProduct productDetails={product} />
        </div>
    );
};
    
export default PDP;