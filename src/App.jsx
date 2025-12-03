// src/App.jsx
import { Routes, Route } from "react-router-dom";
import RootLayout from "./pages/Root";
import WorkoutPage from "./pages/Workout";
import LogPage from "./pages/Log";
import NotFoundPage from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<WorkoutPage />} />
        <Route path="workout" element={<WorkoutPage />} />
        <Route path="log" element={<LogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
