import React from 'react';
import classes from './Education.module.css';
import "animate.css/animate.min.css";


const Education = (props) => {

    return (
        <div className={classes.box} id="education">
                <span className={classes.head}>MY JOURNEY</span>
                <section className={classes.container}>
                    <div className={classes.container_content}>
                        <div className={classes.row}>
                            <div className={classes.row_md_12}>
                                <div className={classes.timeline_centered}>
                                         <article className={classes.timeline_entry}>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                             </div>
                                            <div className={classes.label}>
                                                <h2 >Experience  <span>{props.expdate}</span></h2>
                                                <p>{props.expdisc}</p>
                                            </div>
                                        </article>
                                        <article className={classes.timeline_entry}>
                                            <div className={classes.timeline_icon} >
                                            </div>
                                            <div className={classes.label}>
                                                <h2 >Undergraduation at {props.coll}  <span>{props.edudate}</span></h2>
                                                <p>{props.edudisc}</p>
                                            </div>
                                        </article>
                                        <article className={classes.timeline_entry}>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                            </div>
                                            <div className={classes.label}>
                                                <h2 >Higher Education  <span>{props.highdate}</span></h2>
                                                <p>{props.highedu}</p>
                                            </div>
                                        </article>
                                         <article>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                             </div>
                                            <div className={classes.label}>
                                                <h2 >Internship</h2>
                                                <p>{props.intern}</p>
                                            </div>
                                            <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                        </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>

    )
}


export default Education;
