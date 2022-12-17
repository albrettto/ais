import React from 'react'
import cl from './MyButton.module.css'

const MyButton = ({children, variant, ...props}) => {

    const rootClasses = [cl.myBtn]
    rootClasses.push(cl[variant])    

    return (
        <button className={rootClasses.join(' ')} {... props}>
            {children}
        </button>
    )
}

export default MyButton