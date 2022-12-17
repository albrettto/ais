import React from 'react'
import cl from './Clients.module.css'

import AST from '../../images/ast.png'
import Piter from '../../images/piter.png'
import Rosman from '../../images/rosm.png'
import Prosv from '../../images/prosv.png'

const Clients = ({}) => {

    return (
        <div className={cl.loc}>
            <h1 className={cl.title}>Поставщики</h1>
            <div className={cl.cent}>
            <div className={cl.card}>
                    <img src={Prosv} alt="Просвещение" className={cl.pic}/>
                    <div>
                        <p className={cl.caption}>Издательство "Просвещение"</p>
                        <p>Электронная почта для оптовой поставки продукции: <a href="mailto:prosv@prosv.ru">prosv@prosv.ru</a></p>
                        <p>Номер телефона для связи: <a href='tel:+74957893040'>+7 (495) 789-30-40</a></p>
                        <p className={cl.addres}>Адрес представительства: 127473, Москва, ул. Краснопролетарская, д.16, стр.3, подъезд 8, бизнес-центр «Новослободский»</p>
                    </div>
                </div>
                <div className={cl.card}>
                    <img src={Piter} alt="Питер" className={cl.pic}/>
                    <div>
                        <p className={cl.caption}>Издательский дом "Питер"</p>
                        <p>Электронная почта для оптовой поставки продукции: <a href="mailto:sales@piter.com">sales@piter.com</a></p>
                        <p>Номер телефона для связи: <a href='tel:+78127037373'>+7(812)703-73-73</a> (секретарь)</p>
                        <p className={cl.addres}>Адрес представительства: 194044, г. Санкт-Петербург, Б. Сампсониевский пр., д. 29а<br></br>(Ст. метро «Выборгская»)</p>
                    </div>   
                </div>
                <div className={cl.card}>
                    <img src={Rosman} alt="Росмэн" className={cl.pic}/>
                    <div>
                        <p className={cl.caption}>Издательство "Росмэн"</p>
                        <p>Электронная почта для оптовой поставки продукции: <a href="mailto:rosman@rosman.ru">rosman@rosman.ru</a></p>
                        <p>Номер телефона для связи: <a href='tel:+74959337130'>+7 (495) 933-71-30</a></p>
                        <p className={cl.addres}>Адрес представительства: 127521, г. Москва, ул. Шереметьевская, д. 47, м. Бутырская, Марьина Роща</p>
                    </div>
                </div>
                <div className={cl.card}>
                    <img src={AST} alt="АСТ" className={cl.pic}/>
                    <div>
                        <p className={cl.caption}>Издательская группа "АСТ"</p>
                        <p>Электронная почта для оптовой поставки продукции: <a href="mailto:opt@ast.ru">opt@ast.ru</a></p>
                        <p>Номер телефона для связи: <a href='tel:+74999516000'>+7(499)951-6-000</a></p>
                        <p className={cl.addres}>Адрес представительства: 129085, г. Москва, Звёздный б-р, д. 21</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Clients