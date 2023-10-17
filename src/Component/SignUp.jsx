import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSinup = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
           
         createUser(email, password,)
        .then(result => {
            console.log(result.user);
            const createdAt = result.user?.metadata?.creationTime;
            const registeredUser = {email, password, createdAt: createdAt}
            // new user has been created
            fetch('https://user-management-system-server-5ss1zr9va-jillurs-projects.vercel.app/signupuser', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(registeredUser)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    console.log("signup successfull");
                }
            })
        })
        .catch(error => console.error(error))
    }
  return (
    <div>
      <h2>Sign up </h2>
      <div>
        
        <div className="hero">
          <div className=" ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl text-center mt-12 mb-12 font-bold">
                Add User!
              </h1>
            </div>
            <div className="card shadow-2xl bg-pink-100">
              <form onSubmit={handleSinup} className="card-body lg:w-[50vw]">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="w-36 flex">
                  <h2 className="mt-2">Gender</h2>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="radiomf"
                        value="male"
                        className="radio ml-4"
                        checked
                      />
                      <span className="ml-2 mr-4 label-text">Male</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="radiomf"
                        value="female"
                        className="radio checked:bg-blue-500"
                        checked
                      />
                      <span className="ml-2 label-text">Female</span>
                    </label>
                  </div>
                </div>
                <div className="w-36 flex">
                  <h2 className="mt-2">Status</h2>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="radioai"
                        value="active"
                        className="radio ml-4"
                        checked
                      />
                      <span className="ml-2 mr-4 label-text">Active</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="radioai"
                        value="Inactive"
                        className="radio checked:bg-blue-500"
                        checked
                      />
                      <span className="ml-2 label-text">Inactive</span>
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-secondary">ADD</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
