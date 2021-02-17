import React from "react";
import {AffairType, FilterType} from "./HW2";
import classes from "./Affairs.module.css";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id:number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};

    const color = classes.name + ' ' +  classes[props.affair.priority]
    // в переменной колор установленно два класса, во втором класс выбирается в зависимости от пропс (лоу, мидл, хай)

    return (
        <div className={classes.task}>

            <span className={classes.name}>{props.affair.name}</span>
            <span className={color}>{props.affair.priority}</span>
            <button className={classes.deleteButton} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;



/*
className={classes.deleteButton + ' ' + classes.name} */
