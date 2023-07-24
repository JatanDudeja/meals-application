import React, { useContext } from "react"
import axios from "axios"

const AppContext = React.createContext()



export default function AppProvider({children}){

    const [meals, setMeals] = React.useState([])


    const fetchMeals = async (url) => {
        try{
            const {data} = await axios(url)
            setMeals(data.meals)
            // console.log(data.meals)
        }
        catch(e){
            console.log(e.response)
        }
    }

    const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

    React.useEffect(() => {
        fetchMeals(allMealsUrl)
    }, [])


    return(
        <AppContext.Provider value={{meals}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext}