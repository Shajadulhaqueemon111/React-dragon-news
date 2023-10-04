import React from 'react';
import Header from './Shared/Header/Header';
import RightsideNave from './Shared/RightSideNave/RightsideNave';
import { useParams } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';

const News = () => {

    const{id,details}=useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           <div className='grid md:grid-cols-1 lg:grid-cols-3'>
            <div>
            <h2 className='text-4xl'>News Details</h2>
            {id}
            {details}
            </div>
            <div>

            </div>
           <RightsideNave></RightsideNave>
           </div>

        </div>
    );
};

export default News;