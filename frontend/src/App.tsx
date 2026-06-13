import { Slide, ToastContainer } from "react-toastify";
import AppRouter from "./app/routers";
import useAuthStore from "./features/auth/auth.store";
import { useEffect } from "react";
import PageLoader from "./shared/PageLoader";
import useModalStore from "./features/ui/modals/modal.store";
import DeleteConfirmationModal from "./shared/DeleteConfirmationModal";

const App = () => {
  const { checkAuth, checkingAuth } = useAuthStore();
  const { deleteConfirmModalOpen } = useModalStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (checkingAuth) return <PageLoader />;

  return (
    <>
      <AppRouter />
      <ToastContainer autoClose={1500} transition={Slide} />

      {deleteConfirmModalOpen && <DeleteConfirmationModal />}
    </>
  );
};

export default App;
