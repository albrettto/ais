import React from 'react'
import OrderCard from '../OrderCard/OrderCard'
import cl from './Orders.module.css'



const Orders = ({newOrder}) => {

    return (
        <div className={cl.loc}>

            {newOrder === 'There is no Orders in repository'
                ? 
                <div className={cl.noOrders}>
                    <p>Заказы отсутствуют</p>
                </div>
                : 
                newOrder.map(order =><OrderCard order={order} key={order.id}/>)
            }
        </div>
  )
}

export default Orders