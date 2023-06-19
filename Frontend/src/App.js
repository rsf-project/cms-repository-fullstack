import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./login/Login";
import Dashboard from "./pages/Layout";
import Article from "./pages/content/tableArticle";
import Category from "./pages/content/tableCategory";
import { useCookies } from "react-cookie";

function App() {
  const [cookie] = useCookies();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            cookie.token === undefined || cookie.token === "" ? (
              <Login />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            cookie.token === undefined || cookie.token === "" ? (
              <Navigate replace to={"/"} />
            ) : (
              <Dashboard />
            )
          }
        />
        <Route
          path="/article"
          element={
            cookie.token === undefined || cookie.token === "" ? (
              <Navigate replace to={"/"} />
            ) : (
              <Article />
            )
          }
        />
        <Route
          path="/category"
          element={
            cookie.token === undefined || cookie.token === "" ? (
              <Navigate replace to={"/"} />
            ) : (
              <Category />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
