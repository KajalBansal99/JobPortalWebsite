import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/ui/Home";
import Jobs from "./components/Jobs";
import Signup from "./components/ui/auth/Signup";
import Login from "./components/ui/auth/Login";
import Navbar from "./components/ui/shared/Navbar";
import Browse from "./components/Browse";
import ErrorPage from "./components/ErrorPage";
import NotFound from "./components/NotFound";
import StudentDashboard from "./components/StudentDashboard";
import RecruiterDashboard from "./components/RecruiterDashboard";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./components/Profile";
import JobsPage from "./pages/JobsPage";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: (
      <>
        <Navbar />
        <Login />
      </>
    )
  },
  {
    path: '/signup',
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    )
  },
  {
    path: '/jobs',
    element: (
      <>
        <Navbar />
        <Jobs />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/browse',
    element: (
      <>
        <Navbar />
        <Browse />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/student-dashboard',
    element: (
      <>
        <Navbar />
        <StudentDashboard />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/recruiter-dashboard',
    element: (
      <>
        <Navbar />
        <RecruiterDashboard />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '*',
    element: (
      <>
        <Navbar />
        <NotFound />
      </>
    )
  },
  {
    path: '/profile',
    element: (
      <>
        <Navbar />
        <Profile />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
  path: '/jobs',
  element: <JobsPage />
}
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={appRouter} />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthProvider>
  );
}

export default App;