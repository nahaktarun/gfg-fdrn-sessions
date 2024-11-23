import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useParams,
  useRouteError,
} from "react-router-dom";

// create routes to access this particular component for a specific route or resource page.
// www.google.com/resource
// /resource -> route

import {
  BrowserRouter as Router2,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate("/product");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={onHandleClick}>Products</button>
    </div>
  );
};
const AboutPage = () => <h1>About Page</h1>;
const ProductPage = () => (
  <div>
    <h1>hi From product</h1>
    <header></header>
    <Outlet />
    <footer></footer>
  </div>
);
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <p>{error.status === 404 ? "Page not found" : "Internal Server error"}</p>
    </div>
  );
};

const ErrorPage2 = () => {
  return (
    <div>
      <p> Page not found</p>
    </div>
  );
};

const ProductDetails = () => {
  const { productId } = useParams();
  return (
    <div>
      <p>{productId}</p>
    </div>
  );
};

// 1. using createBrowserRouter way
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/about",
//     element: <AboutPage />,
//   },
//   {
//     path: "/product",
//     element: <ProductPage />,
//     children: [
//       {
//         path: "/product/:productId",
//         element: <ProductDetails />,
//       },
//     ],
//   },
// ]);

// 1. Static route -> fixed route
// 2. dynamic routes -> routes whose names changes over time.
// -shoes, cloths, medicines ....etc.

// function App() {
//   return <RouterProvider router={router} />;
// }

function App() {
  return (
    <div>
      <Router2>
        <Routes>
          <Route path="/*" element={<ErrorPage2 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router2>
    </div>
  );
}

export default App;
