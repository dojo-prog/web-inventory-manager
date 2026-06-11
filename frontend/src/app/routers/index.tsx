import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { adminRoutes } from "./admin.routes";
import AdminLayout from "../../layouts/admin/AdminLayout";
import Signin from "../../pages/admin/Auth/Signin";
import NotFound from "../../pages/NotFound";
import useAuthStore from "../../features/auth/auth.store";

const AppRouter = () => {
  const { user } = useAuthStore();

  return (
    <BrowserRouter>
      {/* TODO add permission guard */}
      <Routes>
        {/* Admin Main */}
        <Route
          path="/admin"
          element={user ? <AdminLayout /> : <Navigate to={"/admin/auth"} />}
        >
          {adminRoutes.map((r, i) => (
            <Route
              key={r.path ?? `index-${i}`}
              index={r.index}
              path={r.path}
              element={r.element}
            />
          ))}
        </Route>

        {/* Admin Auth */}
        <Route
          path="/admin/auth"
          element={!user ? <Signin /> : <Navigate to={"/admin"} />}
        ></Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
