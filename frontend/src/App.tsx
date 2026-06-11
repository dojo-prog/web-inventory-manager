import { Slide, ToastContainer } from "react-toastify";
import AppRouter from "./app/routers";
import useAuthStore from "./features/auth/auth.store";
import { useEffect } from "react";

const App = () => {
  const { checkAuth, checkingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  // TODO add page loader
  if (checkingAuth) return null;

  return (
    <>
      <AppRouter />
      <ToastContainer autoClose={1500} transition={Slide} />
    </>
  );
};

export default App;
