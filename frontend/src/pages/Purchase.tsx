import { useState, useEffect, FormEvent } from "react";

import { useParams, useNavigate } from "react-router-dom";
import validator from "validator";
import { FaShoppingCart } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

import { useAuth } from "../contexts/AuthContext";

import Input from "../components/form/Input";
import Button from "../components/form/Button";
import Spinner from "../components/Spinner";

import { formatDate } from "../utils/date";

import ICourseResponse from "../models/responses/ICourseResponse";
import ITransactionRequest from "../models/requests/ITransactionRequest";

const PurchasePage = () => {
    const [cardNumber, setCardNumber] = useState<string>("");
    const [expiration, setExpiration] = useState<string>("");
    const [securityCode, setSecurityCode] = useState<string>("");
    const [zip, setZip] = useState<string>("");
    const [course, setCourse] = useState<ICourseResponse | null>(null);
    const [touched, setTouched] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const { courseId } = useParams();

    const navigate = useNavigate();

    const { account } = useAuth();

    const getCourse = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/courses/${courseId}`, { method: "GET" });

        const data = await response.json();

        if (response.ok) {
            setCourse(data);
        }
    };

    const validateForm = (): boolean => {
        if (!validator.isCreditCard(cardNumber)) {
            return false;
        }

        if (expiration.length < 3) {
            return false;
        }

        if (securityCode.length < 3) {
            return false;
        }

        if (zip.length < 3) {
            return false;
        }

        return true;
    };

    const purchaseCourse = (e: FormEvent) => {
        e.preventDefault();

        setTouched(true);

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        const transactionRequest: ITransactionRequest = {
            accountId: account!.id,
            courseId: parseInt(courseId!),
            currency: "USD",
            paymentMethod: "credit_card"
        };

        console.log("data: ", transactionRequest);

        navigate(`/courses/${courseId}`);
    };

    useEffect(() => {
        getCourse().then();
    }, [courseId]);

    if (!course) return <Spinner />;

    return (
        <section className="flex flex-col items-center max-w-[1200px] mx-auto">
            <h1 className="font-bold text-[36px]">Purchase Course</h1>
            <div className="flex justify-between gap-x-10 w-full mt-5">
                <div>
                    <img src={course.thumbnailUrl} alt={course.title} className="rounded-2xl" />
                    <h2 className="mt-2 font-bold text-[20px]">{course.title}</h2>
                    <div className="my-5">
                        <div className="flex items-center gap-x-2">
                            <PiStudentFill className="text-[20px]" />
                            <p>{course.studentsCount} students</p>
                        </div>
                        <div className="flex items-center gap-x-2 mt-2">
                            <MdUpdate className="text-[20px]" />
                            <p>Last updated: {formatDate(course.updatedAt)}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="mt-2 font-bold text-[20px]">Credit/Debit Card</h2>
                    <form onSubmit={purchaseCourse}>
                        <label htmlFor="cardNumber" className="block my-2 font-medium text-sm">
                            Card Number
                        </label>
                        <Input
                            id="cardNumber"
                            placeholder="Enter card number"
                            touched={touched}
                            value={cardNumber}
                            errorMessage="Card number is not valid."
                            className="w-full"
                            validation={(value) => validator.isCreditCard(value)}
                            onChange={setCardNumber}
                        />
                        <div className="flex flex-col gap-3 mb-2 sm:flex-row">
                            <div>
                                <label htmlFor="expirationInput" className="block my-2 font-medium text-sm">
                                    Expiration
                                </label>
                                <Input
                                    id="expirationInput"
                                    placeholder="Enter expiration"
                                    touched={touched}
                                    value={expiration}
                                    errorMessage="Expiration is not valid."
                                    className="w-full"
                                    validation={(value) => value.length >= 3}
                                    onChange={setExpiration}
                                />
                            </div>
                            <div>
                                <label htmlFor="securityCodeInput" className="block my-2 font-medium text-sm">
                                    Security Code
                                </label>
                                <Input
                                    id="securityCodeInput"
                                    placeholder="Enter security code"
                                    touched={touched}
                                    value={securityCode}
                                    errorMessage="Security code is not valid."
                                    className="w-full"
                                    validation={(value) => value.length >= 3}
                                    onChange={setSecurityCode}
                                />
                            </div>
                        </div>
                        <label htmlFor="zipInput" className="block my-2 font-medium text-sm">
                            Zip
                        </label>
                        <Input
                            id="zipInput"
                            placeholder="Enter zip"
                            touched={touched}
                            value={zip}
                            errorMessage="Zip is not valid."
                            className="w-full"
                            validation={(value) => value.length >= 3}
                            onChange={setZip}
                        />
                        <div className="flex items-center gap-x-2 my-4">
                            <p className="text-gray-400">Price:</p> <p className="text-[24px] font-semibold">19.99 $</p>
                        </div>
                        <Button
                            disabled={loading}
                            type="submit"
                            className="flex justify-center items-center gap-x-2 w-full py-3 px-6 text-[20px] text-white bg-green-600 enabled:hover:bg-green-700 disabled:opacity-50"
                        >
                            <FaShoppingCart className="text-[24px]" />
                            <span>{loading ? "Purchasing..." : "Purchase Course"}</span>
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PurchasePage;
