import React, { useEffect, useState } from 'react';

const MailDetail = () => {
    const [meal,setMeal]=useState({})
    useEffect(()=>{
        const url='https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMeal(data.meals[0]))
    },[])
    return (
        <div>
            {/* optional chaning this is a.b.c. data calling */}
            <h1>This is mail detail page </h1>
            {/* <h3>{meal.meals?.[0].strMeal}</h3> */}
            <h3>{meal.strInstructions}</h3>
        </div>
    );
};

export default MailDetail;