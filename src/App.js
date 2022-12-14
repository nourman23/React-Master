import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ToTopBtn from "./components/ToTopBtn";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { NotFound } from "./pages/NotFound";
import Profile from "./pages/Profile";
import { MoveOrderRequest } from "./pages/MoveOrderRequest";
import { DriverConditions } from "./pages/DriverConditions";
import Footer from "./components/Footer";
import Login from "./auth/userLogin";
import Register from "./auth/Register";
import DriverRegister from "./auth/DriverRegister";
import { RequireAuth } from "react-auth-kit";
import { DashHome } from "./Dashboard/home";
import { useAuthUser } from "react-auth-kit";
import { Provider } from "react-redux";
import { store } from "./stors/store";
function App() {
  const auth = useAuthUser();
  console.log(auth()?.role);
  return (
    <Provider store={store}>
      {auth()?.role == 0 || auth() == null ? (
        <>
          <Header />
          <ToTopBtn />

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route
              exact
              path="/move_order_request"
              element={<MoveOrderRequest />}
            ></Route>
            <Route
              exact
              path="/driver_conditions"
              element={<DriverConditions />}
            ></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route
              exact
              path="/driver_register"
              element={<DriverRegister />}
            ></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route
              path="/profile"
              element={
                <RequireAuth loginPath={"/login"}>
                  <Profile />
                </RequireAuth>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route exact path="/dashboard" element={<DashHome />}></Route>
        </Routes>
      )}

      {/* </DataProvider> */}
    </Provider>
  );
}

export default App;
