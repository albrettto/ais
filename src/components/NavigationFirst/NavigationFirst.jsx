import React, {useContext, useState} from 'react'
import MyButton from '../UI/button/MyButton'
import MyNav from '../UI/nav/MyNav'
import CBadge from '../UI/CBadge/CBadge';
import cl from './NavigationFirst.module.css'
import {ReactComponent as CloseSVG} from '../../icons/close.svg'

import MyOffCanvas from '../UI/offcanvas/MyOffCanvas'
import {CartContext} from '../../context/index'

import {ReactComponent as HomeSVG} from '../../icons/home.svg'
import {ReactComponent as UserSVG} from '../../icons/user.svg'
import {ReactComponent as FeedbackSVG} from '../../icons/feedback.svg'
import {ReactComponent as ContactsSVG} from '../../icons/contacts.svg'
import {ReactComponent as CartSVG} from '../../icons/cart.svg'
import CartItem from '../CartItem/CartItem'
import BookService from '../../API/BookService';

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const NavigationFirst = ({fbMod, choosePage}) => {
  const [visible, setVisible] = useState(false)
  const {cart, setCart} = useContext(CartContext)

  function createOrder(){
    const ord = []
    cart.map((item) => { 
      ord.push({isbn: item.isbn, quantity: item.quantity})})
    const orders = { "orders" : ord }
    BookService.putOrder(orders)
    setCart([])
    setVisible(false)
    NotificationManager.success('Заказ оформлен', 'Успешно', 2000);
  }

  return (
        <MyNav type={'first'}>
          <div className={cl.loc}>
            <div className={cl.lLoc}>
              <MyButton variant={'navBtn'}>
                <HomeSVG className={cl.icon}/>
              </MyButton>
              <MyButton variant={'navBtn'}>
                <UserSVG className={cl.icon}/>
              </MyButton>
            </div>
            <div className={cl.rLoc}>
              <MyButton variant={'navBtn'} onClick={fbMod}>
                <span className={cl.p}>Обратная связь</span>
                <FeedbackSVG className={cl.icon}/>
              </MyButton>
              
              <MyButton variant={'navBtn'} onClick={() =>choosePage('contacts')}>
                <span className={cl.p}>Контакты</span>
                <ContactsSVG className={cl.icon}/>
              </MyButton>

              <MyButton variant={'navBtn'} onClick={() => setVisible(true)}>
                <CartSVG className={cl.icon}/>
                {
                  cart.length > 0
                  ? <CBadge variant="#4A83F6">{cart.length}</CBadge>
                  : null
                }
              </MyButton>
              <MyOffCanvas visible={visible} setVisible={setVisible}>
                <div className={cl.offCanvasContent}>
                  <div className={cl.loc}>
                    <h1>Корзина</h1>
                    <MyButton variant={'close'} onClick={() => setVisible(false)}>
                      <CloseSVG />
                    </MyButton>
                  </div>
                  <div className={cl.content}>
                    {
                      cart.length > 0
                      ? 
                      <div>
                        {cart.map((item, index) => {
                          return (
                            <div key={index} className={cl.item}>
                              <CartItem {...item}/>
                            </div>
                          )
                        })}
                        <div className={cl.total}>
                          <span>Итого: </span>
                          <span>{cart.reduce((sum, obj) => obj.price * obj.quantity + sum, 0)} руб.</span>
                        </div>
                        <MyButton variant={'cart'} onClick={() => createOrder()}>
                          <span>Оформить заказ</span>
                        </MyButton>
                      </div>
                      : 
                      <div className={cl.empty}>
                        <span>Корзина пуста</span>
                      </div>
                    }
                  </div>
                </div>
              </MyOffCanvas>
            </div>
          </div>
          <NotificationContainer />
        </MyNav>
  )
}

export default NavigationFirst