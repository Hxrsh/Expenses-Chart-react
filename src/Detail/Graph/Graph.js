import classes from "./Graph.module.css"
const Graph = function(props){
    const data = [
        {
          "day": "mon",
          "amount": 17.45
        },
        {
          "day": "tue",
          "amount": 34.91
        },
        {
          "day": "wed",
          "amount": 52.36
        },
        {
          "day": "thu",
          "amount": 31.07
        },
        {
          "day": "fri",
          "amount": 23.39
        },
        {
          "day": "sat",
          "amount": 43.28
        },
        {
          "day": "sun",
          "amount": 25.48
        }
      ]

      let maxValue=0;
      data.forEach(function(item){
          maxValue = Math.max(maxValue,item.amount);
      })
const graphHeight = function (item){
   const high=  (item.amount/maxValue)*100;
   console.log(high.toFixed(2));
    return high.toFixed(2);
}

    return(
        <div className={classes.container}>
            {data.map((item,index)=>{
                return (
                    <div key={index} className={classes.wrap}>
                    <div hover-text={`$${item.amount.toFixed(2)}`} style={{height: `${graphHeight(item)}%`}} className={classes.bar}></div>
                    <div  className={classes.description}>{item.day}</div>
                    {/* <div className={classes.hoverText}>{item.amount.toFixed(2)}</div> */}
                    </div>
                )
            })}
           
        </div>
        
    )
}
export default Graph;