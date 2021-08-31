import React from 'react';    
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CartCard from '../../ProductCards/CartCard/CartCard';
import Typography from '@material-ui/core/Typography';


function calculateTotalPrice(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }

    return total;
}

class Orders extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        orders: []
      };
    }
  
    componentDidMount() {
        let orders = localStorage.getItem("orders");
        if (orders === null || orders === undefined) {
            orders = [];
        }
        else {
            orders = JSON.parse(orders);
            this.setState({
                orders: orders
            })
        }
    }
  
    componentWillUnmount() {
      
    }

    onSubmit = (event) => {
        console.log("On Submit");
    };
  
    render() {

        let orders = this.state.orders;
        console.log(orders);
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{marginTop: "80px"}}>

                        {orders.map((order, index) => (
                            <div style={{marginBottom: "30px"}}>
                                <Typography variant="subtitle1" color="textSecondary">{order.products.length} product(s) to be {order.orderType === undefined ? "delivered at " + order.address.street + ", " + order.address.city : "picked"}</Typography>
                                { 
                                    order.orderType === undefined ?
                                    <Typography variant="subtitle2" color="textSecondary">Total Price &#8377;{calculateTotalPrice(order.products)}</Typography>
                                    :
                                    null
                                }
                                <Typography variant="subtitle2" color="textSecondary">Ordered on {"Friday, 27th Aug"}</Typography>
                                {
                                    order.products.map((product, innerIndex) => (
                                        <CartCard product={product} key={index} myOrders={true} />
                                    ))
                                }
                            </div>    
                        ))}
                    </div>
                </div>    
            </div>
        );
    }
  }
  
  export default Orders;