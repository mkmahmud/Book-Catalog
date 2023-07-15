import { getAuth, onAuthStateChanged } from "firebase/auth";
import Main from "./layouts/Main";
import { useAppDispatch } from "./redux/hook";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth = getAuth();
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, []);

  return (
    <div
      className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg	 xl:max-w-screen-xl	 2xl:max-w-screen-2xl	 mx-auto px-[10px] md:px-[80px] bg-white"
      style={{ fontFamily: ` 'Poppins', sans-serif` }}
    >
      <Main />
    </div>
  );
}

export default App;
