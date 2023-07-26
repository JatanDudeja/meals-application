import React, { useContext } from "react"
import axios from "axios"

const AppContext = React.createContext()



export default function AppProvider({children}){

    const [meals, setMeals] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [searchTerm, setSearchTerm] = React.useState("")
    const [showModal, setShowModal] = React.useState(false)
    const [selectedMeal, setSelectedMeal] = React.useState(null)
    const[favourites, setFavourites] = React.useState(getFavouritesFromLocalStorage())
    // const [showFavourites, setShowFavourites] = React.useState(false)
    // console.log(searchTerm);

    function getFavouritesFromLocalStorage(){
        let favourites = localStorage.getItem('favourites')
        if(favourites)
            favourites = JSON.parse(favourites)
        else{
            favourites = []
        }

        return favourites 
    }

    function addToFavourites(mealId){
        // setShowFavourites(true)
        // console.log(mealId);
        const alreadyFavourites = favourites.find((meal) => meal.idMeal === mealId)

        if(alreadyFavourites)
            return

        let meal = meals.find((meal) => meal.idMeal === mealId)

        const newFavourites = [...favourites, meal]
        console.log(favourites);

        

        setFavourites(newFavourites)

        localStorage.setItem('favourites', JSON.stringify(newFavourites))

    }


    function removeFavourites(mealId){
        // console.log(mealId);
        const updateFavourites = favourites.filter((meal) => meal.idMeal !== mealId)
        setFavourites(updateFavourites) 
        localStorage.setItem('favourites', JSON.stringify(updateFavourites))

    }

    function showSelectedMeal(mealId, favouriteMeal){
        let meal

        if(favouriteMeal){
            meal = favourites.find((meal) => meal.idMeal === mealId)
        }
        else{
            meal = meals.find((meal) => meal.idMeal === mealId)
        }

        // console.log(selectedMeal);

        setSelectedMeal(meal)
        // console.log(meal);

        setShowModal(true)
    }

    function closeModal(){
        setShowModal(false)
        setSelectedMeal(null)
    }

    const fetchMeals = async (url) => {
        setLoading(true)
        try{
            const {data} = await axios(url)
            data.meals ? setMeals(data.meals) : setMeals([])
            // console.log(data.meals)
        }
        catch(e){
            console.log(e.response)
        }
        setLoading(false)
    }

    function fetchRandomMeals(){
        fetchMeals(randomMealUrl)
    }

    const allMealsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

    React.useEffect(() => {
        fetchMeals(`${allMealsUrl}`)
    }, [])

    React.useEffect(() => {
        if(!searchTerm)return
        fetchMeals(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])


    return(
        <AppContext.Provider value={{meals, loading, setSearchTerm, fetchRandomMeals, showModal, selectedMeal, showSelectedMeal, closeModal, favourites, addToFavourites, removeFavourites}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext}