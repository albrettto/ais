import React,{useState} from 'react'
import MyButton from '../UI/button/MyButton'
import MySelect from '../UI/select/MySelect'
import BookCard from '../BookCard/BookCard'
import MyCheckbox from '../UI/checkbox/MyCheckbox'
import cl from './Books.module.css'
import {ReactComponent as AddSVG} from '../../icons/add.svg'
import {ReactComponent as FilterSVG} from '../../icons/filter.svg'


const Books = ({addMod, newBook, remove, sorting, genres, searchingItem}) => {

    const [selectedSort, setSelectedSort] = useState('')
    const [isCollapsed, setIsCollapsed] = useState(true)

    const sortBooks = (sort) => {
        setSelectedSort(sort)
        sorting(sort)
        //newBook.sort((a,b) => a[sort].localeCompare(b[sort]))
    }

    return (
        <div className={cl.loc}>
            <div className={cl.row}>
                <MyButton onClick={addMod}>
                    <AddSVG />
                </MyButton>
                <div className={cl.row}>
                    <div className={cl.sort}>
                        <MySelect
                            type={'sort'}
                            value={selectedSort}
                            onChange={sortBooks}
                            defaultValue='Сортировать по: "выбрать"'
                            options={[
                            {value: 'title', name: 'Сортировать по: названию'},
                            {value: 'authors', name: 'Сортировать по: автору'},
                            {value: 'price', name: 'Сортировать по: цене'},
                            {value: 'genre', name: 'Сортировать по: жанру'},
                            ]}
                        />
                    </div>
                    {/* <MyButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <FilterSVG className={cl.icon}/>
                    </MyButton> */}
                </div>
            </div>
            {!isCollapsed && (
                        <div className={cl.right}>
                            <p>Жанры</p>
                            {genres.map(genre => 
                                <MyCheckbox label={genre.label}/>)}
                        </div>
                    )}
            {searchingItem.length === 0
                ?
                newBook.length === 0
                    ? 
                    <div className={cl.noBooks}>
                        <p>Книги отсутствуют</p>
                    </div>
                    : 
                    newBook.map(book =><BookCard remove={remove} book={book} key={book.isbn}/>)
                :
                searchingItem.map(book =><BookCard remove={remove} book={book} key={book.isbn}/>)
            }
        </div>
  )
}

export default Books