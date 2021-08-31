import React from 'react';    
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import CartCard from '../../ProductCards/CartCard/CartCard';
import OrderSuccessfulImage from '../../../assets/images/order-success.png';

class OrderSuccessful extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    componentDidMount() {
        
    }
  
    componentWillUnmount() {
      
    }

    onSubmit = (event) => {
        console.log("On Submit");
    };
  
    render() {

        return (
            <div>
                <div>
                    <div style={{textAlign: "center", marginBottom: "20px", paddingTop: "30px"}}><img src={OrderSuccessfulImage} /></div>
                    <div style={{textAlign: "center"}}>
                        <Typography variant="subtitle1" color="textSecondary">Hey, your order is successfully placed!</Typography>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <Typography variant="subtitle1" color="textSecondary">Let's add some items to shop some more!</Typography>
                    </div>
                    <div style={{alignItems: "center", marginRight: "10px", textAlign: "center", marginTop: "15px"}}>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <Button variant="contained" style={{backgroundColor: "#eda3b5", padding: "15px", border: "none", color: "white"}}>Go To Home</Button>
                        </Link>
                    </div>  
                </div>    
            </div>
        );
    }
  }
  
  export default OrderSuccessful;