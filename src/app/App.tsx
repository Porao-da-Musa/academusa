import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { ProtectedRoute } from "./routes/ProtectedRoute";

// Pages
import { LandingPage } from "../features/landing/pages/LandingPage";
import { About } from "../features/landing/pages/About";
import { Plans } from "../features/landing/pages/Plans";
import { Dashboard } from "../features/dashboard/pages/Dashboard";
import { Signup } from "../features/auth/pages/Signup";
import { Login } from "../features/auth/pages/Login";
import { Home } from "../features/home/pages/Home";
import { HomeLayout } from "./layouts/HomeLayout";
import { GymMap } from "../features/gym-map/pages/GymMap";
import { MyWorkout } from "../features/my-workout/pages/MyWorkout";
import { Exercises } from "../features/exercises/pages/Exercises";
import { NotFound } from "./routes/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ROTAS PÚBLICAS */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Plans />} />
        </Route>

        {/* ROTA ADMIN */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* ROTAS INTERNAS */}
        <Route
          element={
            <ProtectedRoute>
              <HomeLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/home/map" element={<GymMap />} />
          <Route path="/home/my-workout" element={<MyWorkout />} />
          <Route path="/home/exercises" element={<Exercises />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
