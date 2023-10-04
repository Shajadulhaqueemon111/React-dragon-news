import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNave = () => {
    const[categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h2 className='text-2xl'>All categories</h2>
            {
                categories.map(category=><Link to={`/category${category.id}`} className='block p-4' key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftsideNave;