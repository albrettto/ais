import React, {useState} from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
import cl from './AddPublisher.module.css'
import BookService from '../../API/BookService'


const AddPublisher= ({setModal}) => {

    const [publisher, setPublisher] = useState('')

    function addNewPublisher() {
        console.log(publisher)
        createPublisher(publisher)
        setModal(false)
      }
    
    async function createPublisher(publisher) {
        console.log(publisher)
        await BookService.postPublisher(publisher)
    }

  return (
        <div >
            <p className={cl.m}>Издатель</p>
            <MyInput
                value={publisher}
                onChange={e => setPublisher(e.target.value)}
                type='text'
            />

            <div className={cl.m}>
                <MyButton variant={'btn'} onClick={addNewPublisher}>
                    Сохранить
                </MyButton>
            </div>
        </div>
  )
}

export default AddPublisher