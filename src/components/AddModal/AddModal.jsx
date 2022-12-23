import React, {useState} from 'react'
import MyModal from '../UI/MyModal/MyModal'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import Select from "react-select";
import cl from './AddModal.module.css'
import BookService from '../../API/BookService';

import {ReactComponent as CloseSVG} from '../../icons/close.svg'

const AddModal = ({modal, setModal, genres, publishers, bookFormats, authors}) => {

  const [selectedAuth, setSelectedAuth] = useState('')
  const [selectedPubl, setSelectedPubl] = useState('')
  const [selectedForm, setSelectedForm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const [book, setBook] = useState([])

  const addNewBook = () => {
    const newBook = {
      publisherId: selectedPubl.value,
      formatId: selectedForm.value,
      genreId: selectedGenre.value,
      authors: selectedAuth.map(author => {return author.value}),
      ...book
    }
    createBook(newBook)
    setModal(false)
  }

  async function createBook(book) {
    await BookService.create(book)
  }
  
  return (
        <MyModal visible={modal} setVisible={setModal}>
          <div className={cl.row}>
            <h2>Добавить книгу</h2>
            <MyButton variant={'close'} onClick={() => setModal(false)}>
              <CloseSVG />
            </MyButton>
          </div>

          <p className={cl.m}>Название произведения</p>
          <MyInput
            value={book.title}
            onChange={e => setBook({...book, title: e.target.value})}
            type='text'
          />

          
          <p className={cl.m}>Автор</p>
          <Select
            value={selectedAuth}
            onChange={setSelectedAuth}
            placeholder='Выберите автора(-ов)'
            options={authors}
            isSearchable={true}
            isMulti={true}
            variant={'smart'}
          />

          <p className={cl.m}>Издательство</p>
          <Select
            value={selectedPubl}
            onChange={setSelectedPubl}
            placeholder='Выберите издательство'
            options={publishers}
            isSearchable={true}
          />

          <p className={cl.m}>Жанр</p>
          <Select
            value={selectedGenre}
            onChange={setSelectedGenre}
            placeholder='Выберите жанр'
            options={genres}
            isSearchable={true}
          />

          <p className={cl.m}>Дата публикации</p>
          <MyInput
            value={book.publicationDate}
            onChange={e => setBook({...book, publicationDate: e.target.value})}
            type='text'
          />

          <p className={cl.m}>Формат книги</p>
          <Select
            value={selectedForm}
            onChange={setSelectedForm}
            placeholder='Выберите формат книги'
            options={bookFormats}
            isSearchable={true}
          />

          <p className={cl.m}>ISBN</p>
          <MyInput
            value={book.isbn}
            onChange={e => setBook({...book, isbn: e.target.value})}
            type='text'
          />

          <p className={cl.m}>Количество</p>
          <MyInput
            value={book.quantity}
            onChange={e => setBook({...book, quantity: parseInt(e.target.value)})}
            type='number'
          />

          <p className={cl.m}>Цена</p>
          <MyInput
            value={book.price}
            onChange={e => setBook({...book, price: parseInt(e.target.value)})}
            type='number'
          />
          <div className={cl.m}>
            <MyButton variant={'btn'} onClick={addNewBook}>Сохранить</MyButton>
          </div>
        </MyModal>
  )
}

export default AddModal