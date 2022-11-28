import React from 'react'
import classes from './Interest.module.css';
import "animate.css/animate.min.css";


  const Interest = (props)=> {

    return (
      <div className={classes.box} id="interest">
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
              <div className={classes.web}>
                <h3>{props.top1}</h3>
                <p>{props.top1disc}</p>
              </div>
              <div className={classes.app}>
              <h3>{props.top2}</h3>
                <p>{props.top2disc}</p>
              </div>
              <div className={classes.other}>
              <h3>{props.top3}</h3>
                <p>{props.top3disc}</p>              
              </div>
          </div>
      </div>
    )
  }


export default Interest;