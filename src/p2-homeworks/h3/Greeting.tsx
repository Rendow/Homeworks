import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback:(event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
    onKeyPressAndTask:(e: KeyboardEvent<HTMLInputElement>) => void

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyPressAndTask} // деструктуризация пропсов
) => {
    const inputClass = error ?  s.error + ' ' + s.input : s.input;

    return (
        <div className={s.greeting}>
            <div><input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyPress={onKeyPressAndTask}/>
                <div className={s.errorMessage}> {error && <div>Name is required!</div>}</div>
            </div>
            <div className={s.buttonContainer}>
                <button onClick={addUser} className={s.addButton}>add</button>
                <span className={s.count}>{totalUsers}</span>
            </div>
        </div>
    );
}

export default Greeting;
