import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import Home from "./pages/Home.tsx";
import SignInPage from "./pages/SignIn.tsx";
import SignUpPage from "./pages/SignUp.tsx";
import MyAccountPage from "./pages/MyAccount.tsx";
import AccountPage from "./pages/Account.tsx";
import CategoryPage from "./pages/Category.tsx";
import CreateCoursePage from "./pages/course/CreateCourse.tsx";
import UpdateCoursePage from "./pages/course/UpdateCourse.tsx";
import CoursePage from "./pages/course/Course.tsx";
import PurchasePage from "./pages/Purchase.tsx";
import NotFoundPage from "./pages/NotFound.tsx";

import Navbar from "./layouts/Navbar.tsx";
import Footer from "./layouts/Footer.tsx";

import ScrollToTop from "./components/ScrollToTop.tsx";

const App = () => {
    return (
        <Router>
            <SnackbarProvider autoHideDuration={3000} />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/account" element={<MyAccountPage />} />
                <Route path="/accounts/:accountId" element={<AccountPage />} />
                <Route path="/categories/:categoryId" element={<CategoryPage />} />
                <Route path="/courses/:courseId" element={<CoursePage />} />
                <Route path="/account/courses/create" element={<CreateCoursePage />} />
                <Route path="/account/courses/:courseId" element={<UpdateCoursePage />} />
                <Route path="/purchase/:courseId" element={<PurchasePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
            <ScrollToTop />
        </Router>
    );
};

export default App;
