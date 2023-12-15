import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { requireAuth } from "./utils";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login, {
  loader as LoginLoader,
  action as LoginAction,
} from "./pages/Login";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import Van, { loader as vanLoader } from "./pages/Vans/Van";
import Host, { loader as hostVansloader } from "./pages/Host/Host";
import Dashboard from "./pages/Host/Dashboard";
import HostVans from "./pages/Host/HostVans";
import HostVan, { loader as vanHostLoader } from "./pages/Host/HostVan";
import Details from "./pages/Host/Details";
import Pricing from "./pages/Host/Pricing";
import Photos from "./pages/Host/Photos";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={LoginLoader}
        action={LoginAction}
      />

      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<ErrorPage />}
      />
      <Route
        path="vans/:id"
        element={<Van />}
        loader={vanLoader}
        errorElement={<ErrorPage />}
      />

      <Route
        path="host"
        element={<Host />}
        loader={async ({ request }) => {
          await requireAuth(request);

          return hostVansloader();
        }}
        errorElement={<ErrorPage />}
      >
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={async ({ request }) => await requireAuth(request)}
        />

        <Route
          path="vans/:id"
          element={<HostVan />}
          loader={async (props) => {
            await requireAuth(props.request);

            return vanHostLoader(props);
          }}
          errorElement={<ErrorPage />}
        >
          <Route
            index
            element={<Details />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<Pricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<Photos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>

        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
