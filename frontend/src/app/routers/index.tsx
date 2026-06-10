import { BrowserRouter, Route, Routes } from "react-router-dom";
import { adminRoutes } from "./admin.routes";
import AdminLayout from "../../layouts/AdminLayout";
import Signin from "../../pages/admin/Auth/Signin";
import NotFound from "../../pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Main */}
        <Route path="/admin" element={<AdminLayout />}>
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
        <Route path="/admin/auth" element={<Signin />}></Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
