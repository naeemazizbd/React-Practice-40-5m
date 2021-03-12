import React, { useEffect, useState } from 'react';

const MealFinder = () => {
    const [search, setSearch]=useState('');
    const [meals,setMeals]=useState([])
    const handleChange= event=>{
        setSearch(event.target.value)


    }

    // serach fild functionality 
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[search])
    return (
        <div>
            <h1>This Is Searvh optionality</h1>
            <input onChange={handleChange} placeholder="search foot" type="text"/>
            <button>Search</button>
            <p>{search}</p>
            <p>{meals?.length}</p>
            {
                // meals?.map(meal=><p>{meal.strMeal}</p>)
                meals?.map(meal=> <img src={meal.strMealThumb} alt=""/> )
                
            }
        </div>
    );
};

export default MealFinder;