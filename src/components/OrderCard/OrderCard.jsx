import React from 'react'
import Authors from '../Authors/Authors'
import cl from './OrderCard.module.css'

const OrderCard = (props) => {

  function sumPrice() {
    let sum = 0
    props.order.order_items.map(order => sum += order.price * order.quantity) // (price * quantity) = (price
    return sum
  }
  function sumQuantity() {
    let sum = 0
    props.order.order_items.map(order => sum += order.quantity)
    return sum
  }

  return (
        <div className={cl.loc}>
          <h1 className={cl.title}>
          Заказ от {props.order.purchaseDate.slice(0, 10)} {props.order.purchaseDate.slice(11, 19)} 
          </h1>
          {props.order.order_items.map(order =>
          <div className={cl.row}>
            <p className={cl.elem}>{order.books.title}</p>
            <p className={cl.elem}>{order.books.authors.map(author => <Authors authors={author}/>)}</p>
            <p className={cl.elem}>{order.books.publisherName}</p>
            <p className={cl.elem}>{order.books.genre}</p>
            <p className={cl.elem}>{order.books.publicationDate.slice(0, 4)}</p>
            <p className={cl.elem}>{order.books.bookFormat}</p>
            <p className={cl.elem}>{order.books.isbn}</p>
            <p className={cl.elem}>{order.quantity} шт.</p>
            <p className={cl.elem}>{order.price} руб.</p>
          </div>
          )}
            <p className={cl.rez}>Итого: {sumPrice()} руб.</p>
        </div>
  )
}

export default OrderCard