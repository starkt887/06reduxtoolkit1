import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import RootLayout from "./layout/RootLayout";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
    </Route>
))

export default router