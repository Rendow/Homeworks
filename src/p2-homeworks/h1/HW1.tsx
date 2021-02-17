import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Vanya',
    message: 'Hello, how are you?',
    time: '22:00',
}
const messageNew = {
    avatar: 'https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png',
    name: 'Olga',
    message: 'thx, fine',
    time: '22:05',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Message
                avatar={messageNew.avatar}
                name={messageNew.name}
                message={messageNew.message}
                time={messageNew.time}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}

        </div>
    )
}

export default HW1
