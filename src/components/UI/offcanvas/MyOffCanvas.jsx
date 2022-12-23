import React from 'react'
import cl from './MyOffCanvas.module.css'

const MyOffCanvas = ({children, visible, setVisible}) => {
    
    const rootClasses = [cl.myOffCanvas]

    if(visible) {  
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')}  
            onClick={function(event){
                if (!event.target.closest(`.${cl.myOffCanvasContent}`)) {
                    setVisible(false);
                }
            }
        }>
            <div className={cl.myOffCanvasContent}>
                {children}
            </div>
        </div>
    )
}

export default MyOffCanvas