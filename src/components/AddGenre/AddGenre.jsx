import React, {useState} from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
import cl from './AddGenre.module.css'
import BookService from '../../API/BookService'


const AddGenre = ({setModal}) => {

    const [genre, setGenre] = useState('')

    function addNewGenre() {
        console.log(genre)
        createGenre(genre)
        setModal(false)
      }
    
    async function createGenre(genre) {
        console.log(genre)
        await BookService.postGenre(genre)
    }

  return (
        <div >
            <p className={cl.m}>Жанр</p>
            <MyInput
                value={genre}
                onChange={e => setGenre(e.target.value)}
                type='text'
            />

            <div className={cl.m}>
                <MyButton variant={'btn'} onClick={addNewGenre}>
                    Сохранить
                </MyButton>
            </div>
        </div>
  )
}

export default AddGenre