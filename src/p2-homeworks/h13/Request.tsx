import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useState} from "react";
import {RequestAPI} from "./api/api";


export const Request = () => {
    const [state, setState] = useState<string>('pending')
    const [checked, setChecked] = useState<boolean>(false)

    const Send = () => {
        RequestAPI.Post(checked)
            .then(res => setState(res.errorText))
            .catch ((error) => {
                setState(error.response.data.errorText)
               })}

    return <div style={{margin:'30px 0 0 20px'}}>
        <SuperCheckbox
            checked={checked}
            onChangeChecked={setChecked}
        >
            Do you want wipe the server?
        </SuperCheckbox>
        <div style={{marginTop:'20px'}}>
            <SuperButton
            onClick={Send}
        >
            YES
        </SuperButton>
            <span style={{marginLeft: '10px', fontSize: "large"}}>
            {`status: ${state}`}
        </span></div>
    </div>
}