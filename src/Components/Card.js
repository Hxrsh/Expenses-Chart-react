import classes from "./Card.module.css"
const Card = function( props){
    return(
        <div className={classes["card-wrapper"]}>
            <div className={classes["card-inner"]}>
                {props.children}
            </div>
        </div>
    )
}
export default Card;