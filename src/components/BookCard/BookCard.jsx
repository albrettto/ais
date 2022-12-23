import React,{useContext} from 'react'
import MyButton from '../UI/button/MyButton'
import Authors from '../Authors/Authors'
import cl from './BookCard.module.css'
import {ReactComponent as BasketSVG} from '../../icons/basket.svg'
import {ReactComponent as EditSVG} from '../../icons/edit.svg'
import {ReactComponent as DeleteSVG} from '../../icons/delete.svg'

import {CartContext} from '../../context/index'
const BookCard = (props) => {
    const {cart, setCart} = useContext(CartContext)
  return (
        <div className={cl.row}>
            <p className={cl.elem}>{props.book.title}</p>
            <p className={cl.elem}>{props.book.authors.map(author => <Authors authors={author}/>)}</p>
            <p className={cl.elem}>{props.book.publisherName}</p>
            <p className={cl.elem}>{props.book.genre}</p>
            <p className={cl.elem}>{props.book.publicationDate.slice(0, 4)}</p>
            <p className={cl.elem}>{props.book.bookFormat}</p>
            <p className={cl.elem}>{props.book.isbn}</p>
            <p className={cl.elem}>{props.book.quantity} шт.</p>
            <p className={cl.elem}>{props.book.price} руб.</p>
            <MyButton>
                <BasketSVG className={cl.icon} onClick={
                    () => setCart(
                        // проверить, есть ли в корзине книга с таким же isbn
                        // если есть, то увеличить количество на 1
                        // если нет, то добавить в корзину
                        cart.some(i => i.isbn === props.book.isbn)
                        ?
                        cart.map(i => i.isbn === props.book.isbn ? {...i, quantity: i.quantity + 1} : i)
                        :                  
                        [...cart, 
                        {title:props.book.title, isbn:props.book.isbn, price:props.book.price, quantity:1}])
                    }/>
            </MyButton>
            <MyButton>
                <EditSVG className={cl.icon}/>
            </MyButton>
            <MyButton onClick={() => props.remove(props.book)}>
                <DeleteSVG className={cl.icon}/>
            </MyButton>
        </div>
  )
}

export default BookCard