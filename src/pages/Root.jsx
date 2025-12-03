// src/pages/RootLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

export default function Root() {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem 2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
