import signUpImg from "../../assets/signUp.png";
import google from "../../assets/google.png";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { createUser } from "../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignUp = () => {
  const dispatch = useAppDispatch();

  const handelSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch(createUser({ email: email, password: password }));
  };

  const { isLoading, user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
    }
  }, [isLoading, user]);

  return (
    <div className="md:flex items-center p-5 justify-between">
      <div className="w-full md:w-4/6">
        <img src={signUpImg} alt="" />
      </div>
      <div className="w-full md:w-2/6">
        <div>
          <h2 className="text-mainBackground text-[30px] font-semibold">
            Sign Up
          </h2>
          <p className="text-[#4F4F4F]">
            Create your own universe of your own Books collection
          </p>
          <div>
            <form onSubmit={handelSubmit}>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">Email</p>
                <input
                  type="text"
                  placeholder="Email"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="email"
                  id="email"
                />
              </div>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">Password</p>
                <input
                  type="text"
                  placeholder="Password"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="password"
                  id="password"
                />
                <p>must be at least 8 characters.</p>
              </div>

              <button
                type="submit"
                className="bg-mainBackground w-full  text-white py-2 px-4 rounded-md"
              >
                Create Account
              </button>
            </form>

            <div className="flex items-center my-10">
              <hr className="flex-grow border border-gray-300" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="flex-grow border border-gray-300" />
            </div>

            <button className="border border-mainBackground w-full  text-black py-2 px-4 rounded-md flex justify-center">
              <img src={google} alt="" /> sign up with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
