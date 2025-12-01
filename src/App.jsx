import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <WorkOut />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "log", element: <Log /> },
    ],
  },
  {
    path: "log",
    element: <Log />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;
