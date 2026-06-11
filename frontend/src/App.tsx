import { Slide, ToastContainer } from "react-toastify";
import AppRouter from "./app/routers";

const App = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer autoClose={1500} transition={Slide} />
    </>
  );
};

export default App;
