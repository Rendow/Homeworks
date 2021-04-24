import Slider from 'rc-slider/lib/Slider'
import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from '../c7-SuperRange/SuperRange.module.css'
import 'rc-slider/assets/index.css';
import {SliderTooltip} from "rc-slider";


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {

    onChangeRange?: (value: number) => void

    value1?: number
    value2?: number
  /*  value?: number*/
    min?:number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value1,value2,className,min,
        onChange,...restProps
        // min, max, step, disable, ...
    }
) => {
    const onChangeCallback = (value: number) => {
        onChangeRange && onChangeRange(+value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    const  Handle  = Slider;

    const handle = (props:any) => {
        const { value, dragging, index, ...restProps } = props;
        return (
            <SliderTooltip
                prefixCls="rc-slider-tooltip"
                overlay={`${value} %`}
                visible={dragging}
                placement="top"
                key={index}
            >
                <Handle value={50} {...restProps} />
            </SliderTooltip>
        );
    };

    return (
        <>
            <Slider
                value={value1}
                style={{width: '400px'}}
                className={finalRangeClassName}
                onChange={onChangeCallback}
             /*   handle={handle}*/

            />

        </>
    )
}

export default SuperDoubleRange
