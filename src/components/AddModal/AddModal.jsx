import React, {useState} from 'react'
import MyModal from '../UI/MyModal/MyModal'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import MySelect from '../UI/select/MySelect'
import cl from './AddModal.module.css'
import {ReactComponent as CloseSVG} from '../../icons/close.svg'



const AddModal = ({modal, setModal, create, genres, publishers, bookFormats}) => {

  const [selectedPubl, setSelectedPubl] = useState('')
  const [selectedForm, setSelectedForm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  // const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  // const [date, setDate] = useState('')
  // const [isbn, setIsbn] = useState('')
  // const [count, setCount] = useState('')
  // const [price, setPrice] = useState('')
  const [book, setBook] = useState([])

  const addNewBook = (e) => {
    console.log(book);
    const lNfN = author.split(' ')
    e.preventDefault()
    const newBook = {
      id: Date.now(),
      publisherName: selectedPubl,
      bookFormat: selectedForm,
      genre: selectedGenre,
      authors: [{lastName: lNfN[0], firstName: lNfN[1]}],
      ...book
    }
    console.log(newBook);
    create(newBook)
    setSelectedForm('')
    setSelectedGenre('')
    setSelectedPubl('')
    setAuthor('')
    setBook({ title: '', authors: [], publisherName: '', genre: '', bookFormat: '', publicationDate: '', isbn: '', quantity: '', price: '' })
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
          <MyInput
            value={author}
            onChange={e => setAuthor(e.target.value)}
            type='text'
          />

          <p className={cl.m}>Издательство</p>
          <MySelect
            value={selectedPubl}
            onChange={setSelectedPubl}
            defaultValue='Выберите издательство'  
            options={publishers}
          />

          <p className={cl.m}>Жанр</p>
          <MySelect
            value={selectedGenre}
            onChange={setSelectedGenre}
            defaultValue='Выберите жанр'
            options={genres}
          />

          <p className={cl.m}>Дата публикации</p>
          <MyInput
            value={book.publicationDate}
            onChange={e => setBook({...book, publicationDate: e.target.value})}
            type='text'
          />

          <p className={cl.m}>Формат книги</p>
          <MySelect
            value={selectedForm}
            onChange={setSelectedForm}
            defaultValue='Выберите формат книги'
            options={bookFormats}
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
            onChange={e => setBook({...book, quantity: e.target.value})}
            type='number'
          />

          <p className={cl.m}>Цена</p>
          <MyInput
            value={book.price}
            onChange={e => setBook({...book, price: e.target.value})}
            type='number'
          />
          <div className={cl.m}>
            <MyButton variant={'btn'} onClick={addNewBook}>Сохранить</MyButton>
          </div>
        </MyModal>
  )
}

export default AddModal