import React from 'react'
import s from './hw10.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from "./bll/loadingReducer";

function HW10() {
    let loading = useSelector<AppStoreType,initStateType>(state => state.loading)
    let dispatch = useDispatch()
    //const loading = false

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() =>{
            dispatch(loadingAC())
        },2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.loading
                ? (
                    <div className={s.ldsFacebook}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    <div >
                        <SuperButton className={s.button} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
