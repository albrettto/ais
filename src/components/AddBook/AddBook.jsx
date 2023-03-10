import React, {useState} from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
import Select from 'react-select'
import cl from './AddBook.module.css'
import BookService from '../../API/BookService'

const AddBook = ({setModal, genres, publishers, bookFormats, authors, addBoo}) => {

    const [selectedAuth, setSelectedAuth] = useState('')
    const [selectedPubl, setSelectedPubl] = useState('')
    const [selectedForm, setSelectedForm] = useState('')
    const [selectedGenre, setSelectedGenre] = useState('')
    const [book, setBook] = useState([])

    const addNewBook = (e) => {
        e.preventDefault() 
        const newBook = {
          publisherId: selectedPubl.value,
          formatId: selectedForm.value,
          genreId: selectedGenre.value,
          authors: selectedAuth.map(author => {return author.value}),
          ...book
        }
        console.log(selectedAuth)
        createBook(newBook)
        const nBook = {
          publisherName: selectedPubl.label,
          bookFormat: selectedForm.label,
          genre: selectedGenre.label,
          authors: selectedAuth.map(author => {return {lastName : author.label.split(' ')[0], firstName : author.label.split(' ')[1]}}),
          ...book
        }
        addBoo(nBook)
        setModal(false)
      }

      async function createBook(book) {
        await BookService.create(book)
      }

  return (
        <div >
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
        </div>
  )
}

export default AddBook