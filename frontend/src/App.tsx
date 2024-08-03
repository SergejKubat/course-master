// import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFlag /* useUnleashClient */ } from "@unleash/proxy-client-react";
import { SnackbarProvider } from "notistack";

import { AuthProvider, ProtectedRoute } from "./contexts/AuthContext.tsx";

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

import { DARK_MODE } from "./constants.ts";

const App = () => {
    const darkMode = useFlag(DARK_MODE);

    // const unleashClient = useUnleashClient();

    // useEffect(() => {
    //     unleashClient.start();

    //     unleashClient.on("ready", () => {
    //         const enabledImpression = unleashClient.isEnabled("darkMode");
    //         console.log(enabledImpression);
    //     });

    //     unleashClient.on("impression", (impressionEvent: object) => {
    //         console.log("impression: ", impressionEvent);
    //     });
    // }, [unleashClient]);

    return (
        <div className={darkMode ? "dark bg-[#111827] text-white" : "text-gray-700"}>
            <Router>
                <AuthProvider>
                    <SnackbarProvider autoHideDuration={3000} />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<SignInPage />} />
                        <Route path="/register" element={<SignUpPage />} />
                        <Route path="/accounts/:accountId" element={<AccountPage />} />
                        <Route path="/categories/:categoryId" element={<CategoryPage />} />
                        <Route path="/courses/:courseId" element={<CoursePage />} />
                        <Route
                            path="/account"
                            element={
                                <ProtectedRoute>
                                    <MyAccountPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/account/courses/create"
                            element={
                                <ProtectedRoute>
                                    <CreateCoursePage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/account/courses/:courseId"
                            element={
                                <ProtectedRoute>
                                    <UpdateCoursePage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/purchase/:courseId"
                            element={
                                <ProtectedRoute>
                                    <PurchasePage />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <Footer />
                    <ScrollToTop />
                </AuthProvider>
            </Router>
        </div>
    );
};

export default App;
