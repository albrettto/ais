import React from 'react'
import cl from './MyNav.module.css'

const MyNav = ({type, ...props}) => {

    const rootClasses = [cl.myNav]

    if(type === 'first')   {  
        rootClasses.push(cl.first)
    }
    if(type === 'second') {  
        rootClasses.push(cl.second)
    }

    return (
       <nav className={rootClasses.join(' ')} {... props}></nav>
    )
}

export default MyNav