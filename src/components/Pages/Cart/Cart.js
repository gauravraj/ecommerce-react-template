import React from 'react';    
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CartCard from '../../ProductCards/CartCard/CartCard';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import emptyBagImage from "../../../assets/images/empty-bag.webp";
import { withRouter } from 'react-router';


// const emptyBagImage = "https://constant.myntassets.com/checkout/assets/img/empty-bag.webp";


class Cart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          products: [],
          showAddressFields: false,
          city: "",
          street: "",
          pincode: "",
      };
    }
  
    componentDidMount() {
        let products = localStorage.getItem("cartItems");
        if (products === null || products === undefined) {
            products = [];
        }
        else {
            products = JSON.parse(products);
            this.setState({
                products: products
            })
        }
    }
  
    componentWillUnmount() {
      
    }

    onDelete = (product, event) => {
        let cartItems = localStorage.getItem("cartItems");
        if (cartItems === null || cartItems === undefined) {
            cartItems = [];
        }
        else {
            cartItems = JSON.parse(cartItems);
            let productIndex = null;
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === product.id) {
                    productIndex = i;
                    break;
                }
            }

            if (productIndex !== null) {
                cartItems.splice(productIndex, 1);
            }
        }

        this.setState({
            products: cartItems
        });

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    onAddAddress = (event) => {
        console.log("On Submit");
        this.setState({showAddressFields: true})
    };

    onAddAddress = (event) => {
        console.log("On Submit");
        this.setState({showAddressFields: true})
    };

    onBack = (event) => {
        this.setState({showAddressFields: false});
    }

    onPlaceOrder = (event) => {
        let cartItems = localStorage.getItem("cartItems");
        if (cartItems === null || cartItems === undefined) {
            cartItems = [];
        }
        else {
            cartItems = JSON.parse(cartItems);
            let order = {
                products: cartItems,
                address: {
                    street: this.state.street,
                    city: this.state.city,
                    pincode: this.state.pincode,
                },
            };
            let myOrders = localStorage.getItem("orders");
            if (myOrders === null || myOrders === undefined) {
                myOrders = [];
            }
            else {
                myOrders = JSON.parse(myOrders);
            }

            myOrders.push(order);

            localStorage.setItem("orders", JSON.stringify(myOrders));
            localStorage.setItem("cartItems", JSON.stringify([]));
            this.props.history.push('/order-successful');
        }

    }

    onTextFieldChangeHandler = (id, event) => {
        this.setState({[id]: event.target.value});
    }
  
    render() {

        let products = this.state.products;

        let price = 0;

        for (let i = 0; i < products.length; i++) {
            price += products[i].price;
        }

        let showAddressFields = this.state.showAddressFields;
        
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{marginTop: "100px", marginBottom: "100px", height: "500px"}}>

                        {
                            products.length > 0 ? 

                            <div>
                                {
                                    !showAddressFields ?
                                    <div>
                                        <div style={{marginBottom: "10px"}}><Typography variant="h6" color="primary"><p style={{fontFamily: "MuliBold", color: "black"}}>{products.length + " product(s) in cart"}</p></Typography></div>
                                        
                                        {
                                            products.map((product, index) => (
                                                <CartCard product={product} key={index} onDelete={this.onDelete} />
                                            ))
                                        }
    
                                        <div style={{marginTop: "15px"}}><Typography variant="h6" color="primary"><p style={{fontFamily: "MuliBold", color: "black"}}>{"Total - "} &#8377;{price}</p></Typography></div>
    
                                        <div style={{marginTop: "15px"}}>
                                            <Button variant="contained" style={{backgroundColor: "#eda3b5", padding: "15px", border: "none", width: "100%", color: "white"}} onClick={this.onAddAddress}>Add address</Button>
                                        </div> 
                                    </div>  
    
                                    :  
    
                                    <div>
                                        <div style={{marginTop: "15px", cursor: "pointer"}}>
                                            <div onClick={this.onBack}><Typography variant="h6" color="primary"><p style={{fontFamily: "MuliBold"}}>{"< Back"}</p></Typography></div>
                                        </div> 
                                        <div style={{marginTop: "15px"}}><TextField id="standard-required" defaultValue="" label="Street" style={{width: "100%"}} onChange={(e) => this.onTextFieldChangeHandler("street", e)} /></div>
                                        <div style={{marginTop: "15px"}}><TextField id="standard-required" defaultValue="" label="City" style={{width: "100%"}} onChange={(e) => this.onTextFieldChangeHandler("city", e)} /></div>
                                        <div style={{marginTop: "15px"}}><TextField id="standard-required" defaultValue="" label="Pincode" style={{width: "100%"}} onChange={(e) => this.onTextFieldChangeHandler("pincode", e)} /></div>

                                        <div style={{marginTop: "15px"}}>
                                            <Button variant="contained" style={{backgroundColor: "#eda3b5", padding: "15px", border: "none", width: "100%", color: "white"}} onClick={this.onPlaceOrder}>Place Order</Button>
                                        </div> 
                                    </div>   
                                } 

                            </div>
                            : 
                            
                            <div>
                                <div style={{textAlign: "center", marginBottom: "-30px"}}><img src={emptyBagImage} /></div>
                                <div style={{textAlign: "center"}}>
                                    <Typography variant="subtitle1" color="textSecondary">Hey, it feels so light</Typography>
                                </div>
                                <div style={{textAlign: "center"}}>
                                    <Typography variant="subtitle1" color="textSecondary">There is nothing in your bag, let's add some items.</Typography>
                                </div>
                                <div style={{alignItems: "center", marginRight: "10px", textAlign: "center", marginTop: "15px"}}>
                                    <Link to="/buyback-store" style={{textDecoration: "none"}}>
                                        <Button variant="contained" style={{backgroundColor: "#eda3b5", padding: "15px", border: "none", color: "white"}}>Go To Store</Button>
                                    </Link>
                                </div>  
                            </div>  
                        }  
                        

                    </div>
                </div>    
            </div>
        );
    }
  }
  
  export default withRouter(Cart);