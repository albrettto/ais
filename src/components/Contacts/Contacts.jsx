import React from 'react'
import cl from './Contacts.module.css'

import TeaBag from '../../images/teabag1.png'
import Loader from '../Loader/Loader'


const Contacts = ({}) => {

    return (
        <div className={cl.loc}>
            <h1 className={cl.title}>Контакты</h1>
            <div className={cl.row}>
                <div>
                    <p className={cl.caption}>По вопросам работы с информационной системой:</p>
                    <p>Технический отдел компании "Чайный пакетик"</p>
                    <p>Номер тех.поддержки: <a href="tel:+79999999999">+7(999)999-99-99</a> (секретарь)</p>
                    <p>Электронная почта для связи: <a href="mailto:tech@teabag.ru">tech@teabag.ru</a> </p>
                    <p className={cl.caption}>По коммерческим вопросам и деловым предложениям:</p>
                    <p>Отдел по работе с клиентами</p>
                    <p>Номер телефона для связи: <a href="tel:+79876543210">+7(987)654-32-10</a></p>
                    <p>Электронная почта для связи: <a href="mailto:comm@teabag.ru">comm@teabag.ru</a> </p>
                </div>
                <img src={TeaBag} alt="" className={cl.pic}/>
            </div>
            <Loader width={100} height={100}/>
        </div>
  )
}

export default Contacts