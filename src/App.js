import React, { useEffect } from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import CountryList from "./pages/CountryList";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Country from "./pages/Country";

const App = () => {
  const theme = useSelector((state) => state.themeReducer.isDark);

  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route index element={<CountryList />} />
            <Route path="/country/:name" element={<Country />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
