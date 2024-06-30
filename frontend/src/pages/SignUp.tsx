import { useState, FormEvent } from "react";

import { Link, useNavigate } from "react-router-dom";
import validator from "validator";

import Input from "../components/form/Input";
import Button from "../components/form/Button";

import { validatePassword } from "../utils/validation";
import IRegisterRequest from "../models/requests/IRegisterRequest";

const SignUpPage = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [touched, setTouched] = useState<boolean>(false);

    const navigate = useNavigate();

    const validateForm = (): boolean => {
        if (firstName.length < 3) {
            return false;
        }

        if (lastName.length < 3) {
            return false;
        }

        if (username.length < 3) {
            return false;
        }

        if (!validator.isEmail(email)) {
            return false;
        }

        if (!validatePassword(password)) {
            return false;
        }

        return true;
    };

    const signUp = async (e: FormEvent) => {
        e.preventDefault();

        setTouched(true);

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        const data: IRegisterRequest = {
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password
        };

        console.log("data: ", data);

        navigate("/sign-in");
    };

    return (
        <section className="flex justify-center items-center">
            <div className="w-[400px] p-6 bg-gray-950 rounded-3xl">
                <h2 className="mb-5 font-semibold text-[32px] text-center">Sign Up</h2>
                <form onSubmit={signUp}>
                    <div className="flex gap-3 mb-2">
                        <div>
                            <label htmlFor="firstNameInput" className="block mb-2 font-medium text-sm">
                                First Name
                            </label>
                            <Input
                                id="firstNameInput"
                                placeholder="Enter first name"
                                touched={touched}
                                value={firstName}
                                errorMessage="First name is not valid."
                                className="w-full"
                                validation={(value) => value.length >= 3}
                                onChange={setFirstName}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastNameInput" className="block mb-2 font-medium text-sm">
                                Last Name
                            </label>
                            <Input
                                id="lastNameInput"
                                placeholder="Enter last name"
                                touched={touched}
                                value={lastName}
                                errorMessage="Last name is not valid."
                                className="w-full"
                                validation={(value) => value.length >= 3}
                                onChange={setLastName}
                            />
                        </div>
                    </div>

                    <label htmlFor="usernameInput" className="block mb-2 font-medium text-sm">
                        Username
                    </label>
                    <Input
                        id="usernameInput"
                        placeholder="Enter username"
                        touched={touched}
                        value={username}
                        errorMessage="Username is not valid."
                        className="w-full"
                        validation={(value) => value.length >= 3}
                        onChange={setUsername}
                    />

                    <label htmlFor="emailInput" className="block mb-2 font-medium text-sm">
                        Email
                    </label>
                    <Input
                        id="emailInput"
                        type="email"
                        placeholder="Enter email"
                        touched={touched}
                        value={email}
                        errorMessage="Email is not valid."
                        className="w-full"
                        validation={(value) => validator.isEmail(value)}
                        onChange={setEmail}
                    />

                    <label htmlFor="passwordInput" className="block mb-2 font-medium text-sm">
                        Password
                    </label>
                    <Input
                        id="passwordInput"
                        type="password"
                        placeholder="Enter password"
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
                        className="w-full mt-4 px-8 py-3 text-[16px] text-white bg-blue-500 rounded-2xl hover:bg-blue-600 disabled:bg-blue-500"
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </Button>

                    <p className="mt-6 text-[16px] text-center">
                        Already have an account?{" "}
                        <Link to="/sign-in" className="text-blue-500 hover:text-blue-600">
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default SignUpPage;
