import { Navigate } from "react-router-dom";
import { useAuthGuard } from "../../features/auth/hooks/useAuthGuard";

type ProtectedRouteProps = {
  readonly children: React.ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { loading, authenticated } = useAuthGuard();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
