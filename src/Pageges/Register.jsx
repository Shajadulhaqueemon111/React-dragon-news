import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

    const {createUser}=useContext(AuthContext)

    const handelRegister=(e)=>{
        e.preventDefault()

        const name=e.target.name.value 
        const Photo=e.target.Photo.value 
        const email=e.target.email.value
        const password=e.target.password.value

        console.log(name,Photo,email,password)

        createUser(email,password)
        .then((res=>{
            console.log(res)
        }))
        .catch((error=>{
            console.log(error)
        }))
    }
    return (
        
        <div>
            <Navbar></Navbar>
             <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left mx-auto">
      <h1 className="text-5xl font-bold">Register now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="Name" name='name'  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name='Photo'  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email'  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center'>Already have an Account?<Link className='text-red-700 text-xl' to='/login'>Login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;