import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import Slider from "rc-slider/lib/Slider";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange: (value: number) => void
    value:number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,value,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const onChangeCallback = (value:number) => {
        onChangeRange && onChangeRange(+value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <div className={finalRangeClassName}>
            <Slider
                style={{width: '400px'}}
                onChange={onChangeCallback}
                value={value}

            />
         </div>
    )
}

export default SuperRange
