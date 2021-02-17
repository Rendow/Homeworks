import React from 'react'
import classes from './Message.module.css'

type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.allContent}>

                    <div><img className={classes.avatar} src={props.avatar} alt=""/></div>

                <div className={classes.content}>
                    <div className={classes.name}>{props.name}</div>
                    <div className={classes.message}>{props.message}</div>
                    <div className={classes.time}>{props.time}</div>
                </div>

            </div>
        </div>
    )
}

export default Message
