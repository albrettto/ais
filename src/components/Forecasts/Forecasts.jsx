import React, {useEffect, useState} from 'react'
import Chart from '../Chart'
import BookService from '../../API/BookService';
import cl from './Forecasts.module.css'
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

import SmartSelect from '../UI/select/SmartSelect';

const Forecasts = ({books}) => {

    const [forecast, setForecast] = React.useState()
    const [book, setBook] = React.useState([])
    const [selectedOptions, setSelectedOptions] = useState();
    const [date, setDate] = React.useState('')

    async function fetchForecast(isbn, date){
        console.log(isbn)
        console.log(date);
        const forc = await BookService.getForecasts(isbn, date)
        setForecast(forc.value)
        console.log(forecast)
    }

    function getBooks(){
        const b = []
        for (let i = 0; i < books.length; i++) {
          b.push({value: books[i].isbn, label: books[i].title})
        }
        setBook(b)
    }

      const getChanges = (data) => {
        setSelectedOptions(data);
        console.log(data);
      }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div className={cl.loc}>
            <h1 className={cl.title}>Прогнозы</h1> 
            <div className={cl.row}>
                <div className={cl.b}>
                    <SmartSelect
                        options={book}
                        placeholder='Выберите книгу'
                        value={selectedOptions}
                        isSearchable={true}
                        getChanges={getChanges}
                    />
                </div>
                
                <MyInput 
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    type='date' 
                    placeholder='Дата' 
                    variant={"date"}
                    
                />
                <MyButton variant={'result'} onClick={() => fetchForecast(selectedOptions.value, date)}>Получить прогноз</MyButton>
            </div>

            {/* <Chart /> */}
        </div>
  )
}

export default Forecasts