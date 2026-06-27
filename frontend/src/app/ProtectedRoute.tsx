import { Navigate } from "react-router-dom";
import type { Tab } from "../types/shared.types";
import useAuthStore from "../features/auth/auth.store";

interface ProtectedRouteProps {
  element: React.ReactElement;
  permissionKey?: Tab;
}

export const ProtectedRoute = ({
  element,
  permissionKey,
}: ProtectedRouteProps) => {
  const { user, allowedTabs } = useAuthStore();

  if (!user) {
    return <Navigate to="/admin/auth" replace />;
  }

  if (permissionKey && allowedTabs && !allowedTabs[permissionKey]) {
    return <Navigate to="/admin" replace />;
  }

  return element;
};
