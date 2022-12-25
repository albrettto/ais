import React, {useEffect, useState} from 'react'
import BookService from '../../API/BookService';
import cl from './Forecasts.module.css'
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import {ReactComponent as BooksSVG} from '../../icons/books.svg'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Select from "react-select";
import Loader from '../Loader/Loader';

const Forecasts = ({books}) => {

    const [forecast, setForecast] = React.useState()
    const [book, setBook] = React.useState([])
    const [selectedOptions, setSelectedOptions] = useState();
    const [date, setDate] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    

    async function fetchForecast(isbn, date){
        setIsLoading(true)
        const forc = await BookService.getForecasts(isbn, date)
        setForecast(transformDate(forc.value))
        setIsLoading(false)
    }

    function getBooks(){
        const b = []
        for (let i = 0; i < books.length; i++) {
          b.push({value: books[i].isbn, label: books[i].title})
        }
        setBook(b)
    }

    function transformDate(dat){
        const glos = []
        for (let i = 0; i < dat.length; i++) {
            glos.push({date: dat[i].date.slice(0,7), forecastedValues: dat[i].forecastedValues})
        }
        return glos
    }

    const getChanges = (data) => {
        setSelectedOptions(data);
      }

    useEffect(() => {
        getBooks()
    }, [])

    const getIntroOfPage = (label) => {
        if (label === '2023-01' || label === '2023-02' || label === '2023-03' || label === '2023-04') {
          return "Прогнозируемое количество книг на " + label;
        }
        else {
          return "Количество проданных книг";
        }
      };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip"> 
            <div className={cl.tool}>
                <BooksSVG/> 
              <p className="label">{payload[0].value} штук</p>
            </div>
              <p className="intro">{getIntroOfPage(label)}</p>
            </div>
          );
        }
      
        return null;
      };

    return (
        <div className={cl.loc}>
            <h1 className={cl.title}>Прогнозы</h1> 
            <div className={cl.row}>
                <div className={cl.b}>
                    <Select
                        options={book}
                        placeholder='Выберите книгу'
                        value={selectedOptions}
                        onChange={getChanges}
                        isSearchable={true}
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
                {
                  isLoading
                  ?
                  <Loader height={250} width={250}/>
                  :
                    forecast != null 
                    ?
                        forecast[forecast.length-1].forecastedValues != 0
                        ?
                        <BarChart
                            width={1400}
                            height={700}
                            data={forecast}
                            margin={{
                                top: 50,
                                right: 50,
                                left: 50,
                                bottom: 5
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} wrapperStyle={{background: '#ffffff', border:'#000 solid 1px', borderRadius:'5px', padding:'10px'}} />
                            <Bar dataKey="forecastedValues" barSize={50}>
                                {
                                forecast.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index < forecast.length-4 ? 'blue' : 'orange'}/>
                                ))
                                }
                            </Bar>
                        </BarChart>
                        :
                        <div>
                            <h1 className={cl.noData}>Не хватает данных</h1>
                        </div>
                    :
                    <div/>
                }

        </div>
  )
}

export default Forecasts