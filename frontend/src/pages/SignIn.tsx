import { useState, FormEvent } from "react";

import { Link, useNavigate } from "react-router-dom";
import validator from "validator";

import Input from "../components/form/Input";
import Button from "../components/form/Button";

import { validatePassword } from "../utils/validation";
import ILoginRequest from "../models/requests/ILoginRequest";

const SignInPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [touched, setTouched] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const validateForm = (): boolean => {
        if (!validator.isEmail(email)) {
            return false;
        }

        if (!validatePassword(password)) {
            return false;
        }

        return true;
    };

    const signIn = async (e: FormEvent) => {
        e.preventDefault();

        setTouched(true);

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setError("");

        const data: ILoginRequest = {
            email: email,
            password: password
        };

        console.log("data: ", data);

        navigate("/profile");
    };

    return (
        <section className="flex justify-center items-center">
            <div className="w-[400px] p-6 bg-gray-950 rounded-3xl">
                <h2 className="mb-5 font-semibold text-[32px] text-center">Sign In</h2>
                <form onSubmit={signIn}>
                    <label htmlFor="emailInput" className="block mb-2 font-medium text-sm">
                        Email
                    </label>
                    <Input
                        id="emailInput"
                        type="email"
                        placeholder="Enter email"
                        required
                        touched={touched}
                        value={email}
                        errorMessage="Email is not valid."
                        className="w-full"
                        validation={(value) => validator.isEmail(value)}
                        onChange={setEmail}
                    />

                    <label htmlFor="passwordInput" className="block my-2 font-medium text-sm">
                        Password
                    </label>
                    <Input
                        id="passwordInput"
                        type="password"
                        placeholder="Enter password"
                        required
                        touched={touched}
                        value={password}
                        errorMessage="Password is not valid."
                        className="w-full"
                        validation={(value) => validatePassword(value)}
                        onChange={setPassword}
                    />

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-6 px-8 py-3 text-[16px] text-white bg-blue-500 rounded-2xl hover:bg-blue-600 disabled:bg-blue-500"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </Button>

                    {error ? <p className="mt-2 text-center text-red-500">{error}</p> : null}

                    <p className="mt-6 text-[16px] text-center">
                        Don't have an account?{" "}
                        <Link to="/sign-up" className="text-blue-500 hover:text-blue-600">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default SignInPage;
