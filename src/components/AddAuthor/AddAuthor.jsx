import React, {useState} from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
import cl from './AddAuthor.module.css'
import BookService from '../../API/BookService'

const AddAuthor = ({setModal}) => {

    const [author, setAuthor] = useState({})
    
    const addNewAuthor = () => {
        console.log(author)
        createAuthor(author.lastName, author.firstName)
        setModal(false)
      }
    
    async function createAuthor(lastName, firstName) {
        console.log(lastName, firstName)
        await BookService.postAuthor(lastName, firstName)
    }

  return (
        <div >
            <div >
                <p className={cl.m}>Фамилия</p>
                <MyInput
                    value={author.lastName}
                    onChange={e => setAuthor({...author, lastName: e.target.value})}
                    type='text'
                />

                <p className={cl.m}>Имя</p>
                <MyInput
                    value={author.firstName}
                    onChange={e => setAuthor({...author, firstName: e.target.value})}
                    type='text'
                />
                <div className={cl.m}>
                    <MyButton variant={'btn'} onClick={addNewAuthor}>
                        Сохранить
                    </MyButton>
                </div>
            </div>
        </div>
  )
}

export default AddAuthor