import React, {useState} from 'react'
import MyModal from '../UI/MyModal/MyModal'
import MyButton from '../UI/button/MyButton'
import cl from './AddModal.module.css'
import BookService from '../../API/BookService';

import {ReactComponent as CloseSVG} from '../../icons/close.svg'
import AddBook from '../AddBook/AddBook';
import AddAuthor from '../AddAuthor/AddAuthor';
import AddPublisher from '../AddPublisher/AddPublisher';
import AddGenre from '../AddGenre/AddGenre';
import AddBookFormat from '../AddBookFormat/AddBookFormat';

const AddModal = ({modal, setModal, genres, publishers, bookFormats, authors, addBoo}) => {
  const [typeModal, setTypeModal] = useState('Книга')


  function selectModal(){
    switch(typeModal){
      case 'Книга':
        return <AddBook
          setModal={setModal} 
          genres={genres}
          publishers={publishers}
          bookFormats={bookFormats} 
          authors={authors}
          addBoo={addBoo}
        />
      case 'Автор':
        return <AddAuthor 
          setModal={setModal} 
        />
      case 'Издательство':
        return <AddPublisher
          setModal={setModal} 
        />
      case 'Жанр':
        return <AddGenre
          setModal={setModal} 
        />
      case 'Формат книги':
        return <AddBookFormat
          setModal={setModal}  
        />
  }}
  
  return (
        <MyModal visible={modal} setVisible={setModal}>
          <div className={cl.row}>
            <h2>{typeModal}</h2>
            <MyButton variant={typeModal} onClick={() => setModal(false)}>
              <CloseSVG />
            </MyButton>
          </div>
          <div className={cl.row}>
            <MyButton variant={'btn'} onClick={() => setTypeModal('Книга')}>
              Книга
            </MyButton>
            <MyButton variant={'btn'} onClick={() => setTypeModal('Автор')}>
              Автор
            </MyButton>
            <MyButton variant={'btn'} onClick={() => setTypeModal('Издательство')}>
              Издательство
            </MyButton>
            <MyButton variant={'btn'} onClick={() => setTypeModal('Жанр')}>
              Жанр
            </MyButton>
            <MyButton variant={'btn'} onClick={() => setTypeModal('Формат книги')}>
              Формат книги
            </MyButton>
          </div>
          {selectModal()}
        </MyModal>
  )
}

export default AddModal