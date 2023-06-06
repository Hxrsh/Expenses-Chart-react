import classes from "./ExpenseDetail.module.css"
import {Fragment} from "react";
import Graph from "../Graph/Graph";
const ExpenseDetail = function(props){
    return(
        <div className={classes.wrap}>
            <div className={classes.heading}>Spending - Last 7 days</div>
            <Graph></Graph>
            <hr></hr>
            <section className={classes.details}>
                <div className={classes.thisWrap}>
                <p className={classes.thisheader}>Total this month</p>
                <p className={classes.thisexpense}>$478.33</p>
                </div>
                <div className={classes.lastWrap}>
                    <p className={classes.lastPercent}>+2.4%</p>
                    <p className={classes.lastSubhead}>from last month</p>
                </div>
            </section>
            </div>
    )
    
}
export default ExpenseDetail;