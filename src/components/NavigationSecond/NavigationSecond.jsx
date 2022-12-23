import React,{useState} from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import MyNav from '../UI/nav/MyNav'
import cl from './NavigationSecond.module.css'

const NavigationSecond = ({searching,change}) => {

    const [searchQuery, setSearchQuery] = useState('')

    function changeSearch(val){
        console.log('()',val)
        setSearchQuery(val)
        var value = val + ''
        setSearchQuery(value)
        console.log('[]', searchQuery)
        change(searchQuery)
    }
    
  return (
        <MyNav type={'second'}>
            <div className={cl.loc}>
                <h1 className={cl.title}>BOOKsNET</h1>
                <div className={cl.rLoc}>
                    <MyInput 
                    value={searchQuery}
                    onChange={e => changeSearch(e.target.value)}
                    // onFocus={e => changeSearch()}
                    type='search' 
                    variant={'search'}/>
                    <MyButton variant={'searchBtn'} onClick={() => searching(searchQuery)}>ПОИСК</MyButton>
                    {/* <MyButton variant={'searchBtn'} onClick={() => fun()}>ПОИСК</MyButton> */}
                    
                </div>
            </div>
        </MyNav>
  )
}

export default NavigationSecond