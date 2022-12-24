import React from 'react'
import Books from '../Books/Books'
import Orders from '../Orders/Orders'
import Reports from '../Reports/Reports'
import Forecasts from '../Forecasts/Forecasts'
import Clients from '../Clients/Clients'
import Contacts from '../Contacts/Contacts'

import cl from './MainPage.module.css'

const MainPage = (props) => {

    function choosePage() {
        if(props.page === 'books') 
            return <Books
                addMod={props.addMod} 
                remove={props.remove} 
                newBook={props.newBook} 
                sorting={props.sorting}
                genres={props.genres}
            />
        else if(props.page === 'orders')
            return <Orders
                newOrder={props.newOrder}
            />
        else if(props.page === 'reports')
            return <Reports/>
        else if(props.page === 'forecasts')
            return <Forecasts
                books={props.newBook} 
            />
        else if(props.page === 'clients')
            return <Clients/>
        else if(props.page === 'contacts')
            return <Contacts/>
    }

    return (
        <div className={cl.page}>
            {choosePage()}
        </div>
  )
}

export default MainPage