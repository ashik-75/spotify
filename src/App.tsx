import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import AroundYou from "./pages/AroundYou";
import Homepage from "./pages/Homepage";
import SearchTerm from "./pages/SearchTerm";
import TopArtistsPage from "./pages/TopArtistsPage";
import TopChart from "./pages/TopChart";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/around-you" element={<AroundYou />} />
        <Route path="/top-chart" element={<TopChart />} />
        <Route path="/top-artists" element={<TopArtistsPage />} />
        <Route path="/search/:searchTerm" element={<SearchTerm />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
