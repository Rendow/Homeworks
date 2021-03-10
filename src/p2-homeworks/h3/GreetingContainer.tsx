import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name:string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    };
    const addUser = () => {
        const trimmedTitle = name.trim()
        if (trimmedTitle !== '') {
            alert(`Hello ${trimmedTitle} !`);
            addUserCallback(name)
        }else {
            setError(true)
        }
        setName('')
    };
    const onKeyPressAndAdd = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(false)
        if (e.key === 'Enter') {
            addUser()
        }
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressAndTask={onKeyPressAndAdd}
        />
    );
}

export default GreetingContainer;
