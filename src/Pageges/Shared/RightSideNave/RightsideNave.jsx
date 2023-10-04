import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub,AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai';

import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightsideNave = () => {
    return (
       <div>
         <div className='p-4 mb-6'>
            <h2 className='text-2xl'>Login with</h2>
            <button className="btn btn-outline mt-4 flex">
               <FcGoogle></FcGoogle>
             Login with google
            </button>
            <button className="btn btn-outline mt-4">
             <AiFillGithub></AiFillGithub>
             Login with github
            </button>
            
        </div>

         <div className='p-4'>
            <h2 className='text-2xl'>Find us on</h2>

            <a className='p-4 flex text-lg items-center border gap-3' href="">
            <AiFillFacebook></AiFillFacebook>
            <span>Facebook</span>
            </a>
            <a className='p-4 flex text-lg items-center border-x gap-3' href="">
            <AiOutlineTwitter></AiOutlineTwitter>
            <span>Twiter</span>
            </a>
            <a className='p-4 flex text-lg items-center border gap-3' href="">
            <AiOutlineInstagram></AiOutlineInstagram>
            <span>Instagram</span>
            </a>
           
        </div>
       
        <div className='p-4 mb-6'>
            <h2 className='text-2xl'>Q-Zone</h2>
           <img src={qZone1} alt="" />
           <img src={qZone2} alt="" />
           <img src={qZone3} alt="" />
            
        </div>
       </div>
    );
};

export default RightsideNave;