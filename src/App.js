import React, {useEffect, useState} from 'react'
import './styles/App.css'
import NavigationFirst from './components/NavigationFirst/NavigationFirst';
import NavigationSecond from './components/NavigationSecond/NavigationSecond';
import AddModal from './components/AddModal/AddModal';
import FeedbackModal from './components/FeedbackModal/FeedbackModal';
import BookService from './API/BookService';
import NavigationLeft from './components/NavigationLeft/NavigationLeft';
import Books from './components/Books/Books';
import MainPage from './components/MainPage/MainPage';

function App() {

  const [addModal, setAddModal] = useState(false)
  const [feedbackModal, setFeedbackModal] = useState(false)
  const [book, setBook] = useState([])
  const [genres, setGenres] = useState([])
  const [publishers, setPublishers] = useState([])
  const [bookFormats, setBookFormats] = useState([])
  const [page, setPage] = useState('books')
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])
  useEffect(() => {
    fetchOrders()
  }, [])

  function genTransfer (genres){
    const gen = []
    for (let i = 0; i < genres.length; i++) {
      gen.push({value: genres[i].id, name: genres[i].genre})
    }
    return gen
  }

  function publTransfer (publishers){
    const publ = []
    for (let i = 0; i < publishers.length; i++) {
      publ.push({value: publishers[i].id, name: publishers[i].publishersName})
    }
    return publ
  }

  function bookFormTransfer (bookFormats){
    const bkFrm = []
    for (let i = 0; i < bookFormats.length; i++) {
      bkFrm.push({value: bookFormats[i].id, name: bookFormats[i].bookFormat})
    }
    return bkFrm
  }

  async function fetchBooks(){
    const books = await BookService.getAll()
    const genres = await BookService.getGenres()
    const publishers = await BookService.getPublishers()
    const bookFormats = await BookService.getBookFormat()
    setBookFormats(bookFormTransfer(bookFormats.value))
    setPublishers(publTransfer(publishers.value))
    setGenres(genTransfer(genres.value))
    setBook(books.value)
  }

  async function fetchOrders(){
    const orders = await BookService.getOrders()
    setOrders(orders.value)
  }

  const addModAdd = () => {
    setAddModal(true)
  }
  
  const addModFB = () => {
    setFeedbackModal(true)
  }

  async function createBook(book) {
    await BookService.create(book)
  }

  const addBook = (newBook) => {
    setBook([...book, newBook])
    const resp = createBook(newBook)
    setAddModal(false)
  }

  async function deleteBook(isbn) {
    await BookService.delete(isbn)
  }

  const removeBook = (delBook) => {
    setBook(book.filter(b => b.isbn !== delBook.isbn))
    deleteBook(delBook.isbn)
  }

  const sortFun = (sort) => {
    if (sort === 'price'){
      setBook([...book].sort((a, b) => a[sort] - b[sort]))
    }
    else if (sort === 'authors'){
      setBook([...book].sort((a, b) => a[sort][0].firstName.localeCompare(b[sort][0].firstName)))
    }
    else
      setBook([...book].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const choosePage = (page) => {
    setPage(page)
  }

  async function searchingBook(book) {
    const books = await BookService.searchBooks(book)
    setBook(books.value)
  }

  const search = (search) => {
    if (search === ''){
      fetchBooks()}
    else{
      searchingBook(search)
      }
    }

    const changeSearch = (query) =>{
       fetchBooks() 
    }


  return (
    <div className="App">
      <NavigationFirst fbMod={addModFB} choosePage={choosePage}/>
      <NavigationSecond
        searching={search}
        change={changeSearch}
      />
      <div className="container">
        <NavigationLeft choosePage={choosePage}/>
        <MainPage 
          addMod={addModAdd} 
          remove={removeBook} 
          newBook={book} 
          sorting={sortFun}
          page={page}
          newOrder={orders}
          />
      </div>
      <AddModal 
        create={addBook} 
        modal={addModal} 
        setModal={setAddModal}
        genres={genres}
        publishers={publishers}
        bookFormats={bookFormats}
        />
      <FeedbackModal modal={feedbackModal} setModal={setFeedbackModal}></FeedbackModal>
    </div>
  );
}

export default App
