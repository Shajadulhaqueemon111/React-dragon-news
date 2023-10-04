import React from 'react';
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className='flex bg-slate-100'>
            <button className='btn btn-secondary'>Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} >
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;