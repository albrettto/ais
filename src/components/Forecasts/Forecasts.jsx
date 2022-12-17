import React from 'react'
import Chart from '../Chart'
import cl from './Forecasts.module.css'

const Forecasts = ({}) => {

    return (
        <div className={cl.loc}>
            <h1 className={cl.title}>Прогнозы</h1> 
            <Chart />
        </div>
  )
}

export default Forecasts