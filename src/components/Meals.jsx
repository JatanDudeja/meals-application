import React from 'react'
import { useGlobalContext } from '../Context'
import {BsHandThumbsUp} from 'react-icons/bs'

export default function Meals(){

    const {meals, loading, showSelectedMeal, addToFavourites} = useGlobalContext()
    // console.log(meals);


    if(loading){
        return (
            <section className='section'>
                <h4>Loading...</h4>
            </section>
        )
    }

    if(meals.length < 1){
        return (
            <section className='section'>
                <h4>No meals matched your searched term. Please try again.</h4>
            </section>
        )
    }


    

    return (
        <section className='section-center'> 
            {
                meals.map(function(meal){
                    const {idMeal, strMeal : title, strMealThumb : image} = meal
                    return(
                        <article key = {idMeal} className='single-meal'>
                            <img src={image} className='img' onClick={() => showSelectedMeal(idMeal, false)}/>
                            <footer>
                                <h5>{title}</h5>
                                <button className='like-btn' onClick={() => addToFavourites(idMeal)}><BsHandThumbsUp /></button>
                            </footer>

                        </article>
                    )
                })
            }
        
        </section>
    )
}