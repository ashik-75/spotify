import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Analytics from "./pages/Analytics";
import Homepage from "./pages/Homepage";
import Payment from "./pages/Payment";
import Resources from "./pages/Resources";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/resources" element={<Resources />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
