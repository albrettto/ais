import axios from 'axios'

export default class BookService {
  static async getAll() {
    const response = await axios.get('http://localhost:5672/Book')
    return response.data
  }
  static async getByISBN(isbn) {
    const response = await axios.get('http://localhost:5672/Book/' + isbn)
    return response.data
  }
  static async getByGenre(genreId) {
    const response = await axios.get('http://localhost:5672/Book/genre/' + genreId)
    return response.data
  }
  static async getByAuthor(authorId) {
    const response = await axios.get('http://localhost:5672/Book/author/' + authorId)
    return response.data
  }
  static async getByTitle(title) {
    const response = await axios.get('http://localhost:5672/Book/title/' + title)
    return response.data
  }

  static async create(book) {
    const response = await axios.post('http://localhost:5672/Book', book)
    // return response.data
  }

  static async update(book) { 
    const response = await axios.put('http://localhost:5672/Book', book)
  }

  static async delete(isbn) {
    const response = await axios.delete('http://localhost:5672/Book/' + isbn)
    return response.data
  }

  static async getGenres() {
    const response = await axios.get('http://localhost:5672/Genre')
    return response.data
  }

  static async getPublishers() {
    const response = await axios.get('http://localhost:5672/Publisher')
    return response.data
  }

  static async getBookFormat() {
    const response = await axios.get('http://localhost:5672/BookFormat')
    return response.data
  }

  static async getAuthors() {
    const response = await axios.get('http://localhost:5672/Author')
    return response.data
  }

  static async getOrders() {
    const response = await axios.get('http://localhost:5672/Order')
    return response.data
  }

  static async searchBooks(search) {
    const response = await axios.get('http://localhost:5672/Book/title/' + search)
    return response.data
  }

  static async getForecasts(isbn, date) {
    const response = await axios.get('http://localhost:5672/Order/' + isbn + '/' + date)
    return response.data
  }
    
}