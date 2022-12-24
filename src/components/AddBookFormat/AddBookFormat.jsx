import React, {useState} from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
import cl from './AddBookFormat.module.css'
import BookService from '../../API/BookService'

const AddBookFormat = ({setModal}) => {

    const [bookFormat, setBookFormat] = useState('')

    function addNewBookFormat() {
        console.log(bookFormat)
        createBookFormat(bookFormat)
        setModal(false)
      }
    
    async function createBookFormat(bookFormat) {
        console.log(bookFormat)
        await BookService.postBookFormat(bookFormat)
    }

  return (
        <div >
            <p className={cl.m}>Формат книги</p>
            <MyInput
                value={bookFormat}
                onChange={e => setBookFormat(e.target.value)}
                type='text'
            />

            <div className={cl.m}>
                <MyButton variant={'btn'} onClick={addNewBookFormat}>
                    Сохранить
                </MyButton>
            </div>
        </div>
  )
}

export default AddBookFormat