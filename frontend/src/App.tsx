import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.tsx";
import SignInPage from "./pages/SignIn.tsx";
import SignUpPage from "./pages/SignUp.tsx";
import ProfilePage from "./pages/Profile.tsx";
import CategoryPage from "./pages/Category.tsx";
import CoursePage from "./pages/Course.tsx";
import PurchasePage from "./pages/Purchase.tsx";
import NotFoundPage from "./pages/NotFound.tsx";

import Navbar from "./layouts/Navbar.tsx";
import Footer from "./layouts/Footer.tsx";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/categories/:categoryId" element={<CategoryPage />} />
                <Route path="/courses/:courseId" element={<CoursePage />} />
                <Route path="/purchase/:courseId" element={<PurchasePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
