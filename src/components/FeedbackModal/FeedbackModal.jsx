import React from 'react'
import MyModal from '../UI/MyModal/MyModal'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import cl from './FeedbackModal.module.css'
import {ReactComponent as CloseSVG} from '../../icons/close.svg'


const FeedbackModal = ({modal, setModal}) => {

  return (
        <MyModal visible={modal} setVisible={setModal}>
          <div className={cl.row}>
            <h2>Обратная связь</h2>
            <MyButton variant={'close'} onClick={() => setModal(false)}>
              <CloseSVG />
            </MyButton>
          </div>
          <p className={cl.m}>Адрес почты</p>
          <MyInput placeholder="name@example.com"/>
            <p className={cl.grText}>Мы никому не расскажем о нем</p>
          <p className={cl.m}>Ваш отзыв/вопрос/жалоба</p>
          <MyInput  
            type="textarea"
          />
          <div className={cl.m}>
            <MyButton variant={'btn'}>Отправить</MyButton>
          </div>
        </MyModal>
  )
}

export default FeedbackModal