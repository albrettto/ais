import React from 'react'
import cl from './MySelect.module.css'

const MySelect = ({type, options, defaultValue, value, onChange}) => {

    const rootClasses = [cl.mySelect]
    rootClasses.push(cl[type])    

    return (
        <select 
            value={value}
            onChange={event => onChange(event.target.value)}
            className={rootClasses.join(' ')}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
                )}
        </select>
    )
}

export default MySelect