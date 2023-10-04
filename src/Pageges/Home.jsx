import React from 'react';
import Header from './Shared/Header/Header';
import Navbar from './Shared/Navbar/Navbar';
import LeftsideNave from './Shared/LeftSideNave/LeftsideNave';
import RightsideNave from './Shared/RightSideNave/RightsideNave';
import BreakingNews from '../BreakingNews/BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {

    const news=useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div > 
                    <LeftsideNave></LeftsideNave>
                </div>

                {/* news  */}
                <div >
                  {
                    news.map(aNews=>
                        <NewsCard key={aNews.id} news={aNews}></NewsCard>
                    )
                  }
                </div>
                <div >
                <RightsideNave></RightsideNave>
                </div>
            </div>
        </div>
    );
};

export default Home;