import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from '../c7-SuperRange/SuperRange.module.css'
import 'rc-slider/assets/index.css';
import Slider from "rc-slider";


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange: (value: number) => void
    onChangeRange2: (value: number) => void
    value1: number
    value2: number

}
const {createSliderWithTooltip}  = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,onChangeRange2, value1,value2,className,min,
        onChange,...restProps
        // min, max, step, disable, ...
    }
) => {
    const onChangeCallback = (value: number[]) => {
        onChangeRange && onChangeRange(value[0])
        onChangeRange2 &&  onChangeRange2(value[1])
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <div className={finalRangeClassName}>
            <Range min={0} max={100}
                   value={[value1, value2]}
                   defaultValue={[0,100]}
                   onChange={onChangeCallback}
                   />

        </div>
    )
}

export default SuperDoubleRange
