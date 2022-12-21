import React, {useState} from 'react'
import MyButton from '../UI/button/MyButton'
import cl from './NavigationLeft.module.css'

import {ReactComponent as BooksSVG} from '../../icons/books.svg'
import {ReactComponent as OrdersSVG} from '../../icons/orders.svg'
import {ReactComponent as GraphSVG} from '../../icons/graph.svg'
import {ReactComponent as ReportsSVG} from '../../icons/reports.svg'
import {ReactComponent as ClientsSVG} from '../../icons/clients.svg'


const NavigationLeft = (props) => {

    
  return (
    <div className={cl.loc}>
        <ul>
            <li>
                <MyButton variant={'leftBtn'} onClick={() => props.choosePage('books')}>
                    <BooksSVG className={cl.icon}/>
                    Книги
                </MyButton>
            </li>
            <li><MyButton variant={'leftBtn'} onClick={() => props.choosePage('orders')}>
                    <OrdersSVG className={cl.icon}/>
                    Заказы
                </MyButton>
            </li>
            <li><MyButton variant={'leftBtn'} onClick={() => props.choosePage('clients')}>
                    <ClientsSVG className={cl.icon}/>
                     Поставщики
                </MyButton>
            </li>
            <li><MyButton variant={'leftBtn'} onClick={() => props.choosePage('reports')}> 
                    <ReportsSVG className={cl.icon}/>
                    Отчёты
                </MyButton>
            </li>
            <li><MyButton variant={'leftBtn'} onClick={() => props.choosePage('forecasts')}>
                    <GraphSVG className={cl.icon}/>
                    Прогнозы
                </MyButton>
            </li>
        </ul>
    </div>
  )
}

export default NavigationLeft