import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {

    const {title,image_url,details,_id}=news;
    return (
        <div>
           <div className="card card-compact bg-base-100 shadow-xl  mt-3">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    {
        details.length>200?<p>{details.slice(0,200)}<Link to={`/news/${_id}`} className='text-red-700 font-bold'>Read More....</Link></p>: <p>{details}</p>
    }
  
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewsCard;