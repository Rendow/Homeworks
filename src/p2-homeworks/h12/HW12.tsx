import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeType} from "./bll/themeReducer";

const themes = ['dark', 'red','france', 'inexpressible'];

function HW12() {

  let dispatch = useDispatch()
  let theme =  useSelector<AppStoreType, ThemeType>(state => state.theme.color)

    const handleCallback = (value:ThemeType) => {
      dispatch(changeThemeC(value))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
            </span>
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={handleCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
