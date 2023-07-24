import React from 'react'
import { useGlobalContext } from '../Context'

export default function Meals(){

    const {meals} = useGlobalContext()
    // console.log(meals);

    return (
        <section> 
            {
                meals.map(function(meal){
                    return(
                        <div>
                            {meal.strMeal}
                        </div>
                    )
                })
            }
        
        </section>
    )
}