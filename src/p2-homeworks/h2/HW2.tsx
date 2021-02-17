import React, {useState} from "react";
import Affairs from "./Affairs";
import classes from "./Affairs.module.css";

// types
export type AffairPriorityType = "low" |"middle" |"high" ;
export type AffairType  = {
    name: string
    _id: number
    priority: AffairPriorityType
};

export type FilterType = "all" | AffairPriorityType;

// constants
 const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// const sum = (a: number, b: number): string => {
//     return String(a+ b)
// }

export const filterAffairs = (affairs:  Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === "all") return affairs;
    else if(filter === 'low') return affairs.filter(affair => affair.priority === 'low');
    else if(filter === 'middle') return affairs.filter(affair => affair.priority === 'middle');
    else if(filter === 'high') return affairs.filter(affair => affair.priority === 'high')
    else return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return (
        affairs.filter(aff => aff._id !== _id)
    );
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div >
            <hr/>
            homeworks 2

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter = {filter}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    );
}

export default HW2;
