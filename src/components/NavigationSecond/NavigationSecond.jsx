import React,{useState} from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import MyNav from '../UI/nav/MyNav'
import cl from './NavigationSecond.module.css'

const NavigationSecond = ({searching,change}) => {

    const [searchQuery, setSearchQuery] = useState('')

    function changeSearch(val){
        console.log(val)
        setSearchQuery(val)
        console.log(val)
        change(val)
    }
    
  return (
        <MyNav type={'second'}>
            <div className={cl.loc}>
                <h1 className={cl.title}>BOOKsNET</h1>
                <div className={cl.rLoc}>
                    <MyInput 
                    value={searchQuery}
                    onChange={e => changeSearch(e.target.value)}
                    type='search' 
                    variant={'search'}/>
                    <MyButton variant={'searchBtn'} onClick={() => searching(searchQuery)}>ПОИСК</MyButton>
                </div>
            </div>
        </MyNav>
  )
}

export default NavigationSecond