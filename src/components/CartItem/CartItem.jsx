import React,{useContext} from 'react'
import MyButton from '../UI/button/MyButton'
import cl from './CartItem.module.css'
import {ReactComponent as DeleteSVG} from '../../icons/delete.svg'
import {ReactComponent as PlusSVG} from '../../icons/plus.svg'
import {ReactComponent as MinusSVG} from '../../icons/minus.svg'

import {CartContext} from '../../context/index'

const CartItem = (item) => {
    const {cart, setCart} = useContext(CartContext)

    const deleteItem = (item) => {
        setCart(cart.filter(i => i.isbn !== item.isbn))
    }

    const addQuantity = (item) => {
        setCart(cart.filter(i => i.isbn === item.isbn ? i.quantity += 1 : i.quantity))
    }

    const removeQuantity = (item) => {
        setCart(cart.filter(
            i => i.isbn === item.isbn 
            ? 
            (i.quantity === 1 
                ? 
                deleteItem(item) 
                :
                i.quantity -= 1 )
            : i.quantity))
    }

  return (
        <div className={cl.row}>
            <p className={cl.elem}>{item.title}</p>
            <MyButton variant={'close'}  onClick={() => removeQuantity(item)}>
                <MinusSVG/>
            </MyButton>
            <p className={cl.elem}>{item.quantity} шт.</p>
            <MyButton variant={'close'}  onClick={() => addQuantity(item)}>
                <PlusSVG/>
            </MyButton>
            <p className={cl.elem}>{item.price * item.quantity} руб.</p>
            <MyButton variant={'close'} onClick={() => deleteItem(item)}>
                <DeleteSVG className={cl.icon}/>
            </MyButton>
        </div>
  )
}

export default CartItem