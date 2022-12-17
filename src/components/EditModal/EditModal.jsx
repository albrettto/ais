import React from 'react'
import MyModal from '../UI/MyModal/MyModal'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import cl from './EditModal.module.css'


const EditModal = ({modal, setModal}) => {

  return (
        <MyModal visible={modal} setVisible={setModal}>
          <div className={cl.row}>
            <h2>Обратная связь</h2>
            <MyButton type={'close'} onClick={() => setModal(false)}></MyButton>
          </div>
          <p>Адрес почты</p>
          <MyInput placeholder="name@example.com"/>
            <p>Мы никому не расскажем о нем</p>
          <p>Ваш отзыв/вопрос/жалоба</p>
          <MyInput/>
          <MyButton>Отправить</MyButton>
        </MyModal>
  )
}

export default EditModal