import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyNav from '../UI/nav/MyNav'
import cl from './NavigationFirst.module.css'

import {ReactComponent as HomeSVG} from '../../icons/home.svg'
import {ReactComponent as UserSVG} from '../../icons/user.svg'
import {ReactComponent as FeedbackSVG} from '../../icons/feedback.svg'
import {ReactComponent as ContactsSVG} from '../../icons/contacts.svg'
import {ReactComponent as CartSVG} from '../../icons/cart.svg'


const NavigationFirst = ({fbMod, choosePage}) => {
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

              <MyButton variant={'navBtn'}>
                <CartSVG className={cl.icon}/>
              </MyButton>
            </div>
          </div>
        </MyNav>
  )
}

export default NavigationFirst