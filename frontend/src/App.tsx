import { Slide, ToastContainer } from "react-toastify";
import AppRouter from "./app/routers";
import useAuthStore from "./features/auth/auth.store";
import { useEffect } from "react";
import PageLoader from "./shared/PageLoader";

const App = () => {
  const { checkAuth, checkingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (checkingAuth) return <PageLoader />;

  return (
    <>
      <AppRouter />
      <ToastContainer autoClose={1500} transition={Slide} />
    </>
  );
};

export default App;
