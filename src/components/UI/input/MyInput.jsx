import React from 'react'
import cl from './MyInput.module.css'

const MyInput = ({variant,...props}) => {

    const rootClasses = [cl.myInput]
    rootClasses.push(cl[variant])

    return (
       <input className={rootClasses.join(' ')} {... props}/>
    )
}

export default MyInput