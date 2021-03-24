import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        name,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption &&  onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }

    const mappedOptions: any[] = options ? options.map((a,i) => (
            <option className={s.option} value={a}  key={i +''+ a} >
                {a}
            </option>
        ))

       : [];


    return (
      <select className={s.select} onChange={onChangeCallback}  {...restProps}>

            {mappedOptions}  </select>



    )
}

export default SuperSelect
