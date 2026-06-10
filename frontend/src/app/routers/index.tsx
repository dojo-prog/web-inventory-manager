import { BrowserRouter, Route, Routes } from "react-router-dom";
import { adminRoutes } from "./admin.routes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Main */}
        <Route path="/admin" element={<></>}>
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
        <Route path="/admin/auth" element={<></>}></Route>

        {/* Not Found */}
        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
