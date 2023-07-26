import React from 'react'
import {useGlobalContext} from "../Context"

export default function Search(){

    const [text, setText] = React.useState("")

    const {setSearchTerm, fetchRandomMeals} = useGlobalContext()



    function handleChange(e){
        setText(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(text){
            setSearchTerm(text)
            setText('')
        }
    }


    function fetchRandomMeal(){
        setSearchTerm('')
        setText('')
        fetchRandomMeals()
    }



    return (
        <header className='search-container'>
            <form>
                <input type='text' placeholder='Enter your favourite meal' value = {text} className='form-input ' onChange={handleChange}/>
                <button type = 'submit' className='btn' onClick={handleSubmit}>Search</button>
                <button type = 'button' className='btn btn-hipster' onClick={fetchRandomMeal}>Surprise Me!</button>
            </form>
        </header>
    )
}