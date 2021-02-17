import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import classes from "./Affairs.module.css";

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (id:number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')}; // need to fix
    const setHigh = () => {props.setFilter('high')};
    const setMiddle = () => {props.setFilter('middle')};
    const setLow = () => {props.setFilter('low')};

    return (
        <div className={classes.allContent}>

           <div className={classes.affairs}>  {mappedAffairs} </div>

            <div className={classes.selectButtons}>
                <button className={classes.button} onClick={setAll}>All</button>
                <button className={classes.button} onClick={setHigh}>High</button>
                <button className={classes.button} onClick={setMiddle}>Middle</button>
                <button className={classes.button} onClick={setLow}>Low</button>
            </div>
        </div>
    );
}

export default Affairs;
