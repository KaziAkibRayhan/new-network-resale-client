import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        updateUser(name)
          .then(() => {
            toast.success('Sign up successfully!')
            event.target.reset()
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="hero my-10">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Sign Up now!</h1>
        </div>
        <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="btn btn-primary btn-sm" to={"/login"}>
              Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="text-center">
            <button className="btn btn-primary mb-4">Login With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
