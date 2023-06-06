import classes from "./Balance.module.css"
import image from "../images/logo.svg"
import {Fragment} from "react";

const Balance = function(props){
    return (
        <div className={classes.wrap}>
        <div className={classes.headbalance}>
        <p className={classes.strapline}>My balance</p>
        <p className={classes.balance}>$921.48</p>
        </div>
        <div className={classes.logo}><img src={image}/></div>
        </div>
    )
}
export default Balance;