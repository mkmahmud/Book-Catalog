import logInImg from "../../assets/login.png";
import google from "../../assets/google.png";

const Login = () => {
  return (
    <div className="md:flex items-center p-5 justify-between">
      <div className="w-full md:w-2/6">
        <div>
          <h2 className="text-mainBackground text-[30px] font-semibold">Log In</h2>
          <p className="text-[#4F4F4F]">Welcome back to Chyra Library</p>
          <div>
            <form>
              
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">Email Address</p>
                <input
                  type="text"
                  placeholder="Email"
                  className="outline-none border p-2 w-full rounded-xl"
                  name=""
                  id=""
                />
              </div>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">Password</p>
                <input
                  type="text"
                  placeholder="Password"
                  className="outline-none border p-2 w-full rounded-xl"
                  name=""
                  id=""
                />
                <p>must be at least 8 characters.</p>
              </div>

              <button className="bg-mainBackground w-full  text-white py-2 px-4 rounded-md">
                Log In
              </button>
            </form>

            <div className="flex items-center my-10">
              <hr className="flex-grow border border-gray-300" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="flex-grow border border-gray-300" />
            </div>

            <button className="border border-mainBackground w-full  text-black py-2 px-4 rounded-md flex justify-center">
              <img src={google} alt="" /> Log in with google
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/6">
        <img src={logInImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
