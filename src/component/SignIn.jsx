import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const SignIn = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignIn = e => {
        e.preventDefault();
        const email  = e.target.email.value;
        const password  = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log(result.user.email);
            const user = {email: email}
            axios.post('http://localhost:5000/jwt', user, {withCredentials: true })
            .then(res => {
              console.log('data',res.data);
            })
            // navigate('/')
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className=" min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;