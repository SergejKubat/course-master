import { useState, FormEvent } from "react";

import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

import Input from "../components/form/Input";
import Button from "../components/form/Button";

const PurchasePage = () => {
    const [cardNumber, setCardNumber] = useState<string>("");
    const [expiration, setExpiration] = useState<string>("");
    const [securityCode, setSecurityCode] = useState<string>("");
    const [zip, setZip] = useState<string>("");
    const [touched, setTouched] = useState<boolean>(false);
    // const [loading, setLoading] = useState<boolean>(false);

    const { courseId } = useParams();

    const purchaseCourse = (e: FormEvent) => {
        e.preventDefault();

        setTouched(true);
    };

    console.log(courseId);

    return (
        <section className="flex flex-col items-center max-w-[1200px] mx-auto">
            <h1 className="font-bold text-[36px]">Purchase Course</h1>
            <div className="flex justify-between gap-x-10 w-full mt-5">
                <div>
                    <img src="https://picsum.photos/320/240" alt="Python For Begginers" className="rounded-2xl" />
                    <h2 className="mt-2 font-bold text-[20px]">Python For Beginners</h2>
                    <div className="my-5">
                        <div className="flex items-center gap-x-2">
                            <PiStudentFill className="text-[20px]" />
                            <p>12 students</p>
                        </div>
                        <div className="flex items-center gap-x-2 mt-2">
                            <MdUpdate className="text-[20px]" />
                            <p>Last updated: 12/10/2023</p>
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
                            validation={(value) => value.length >= 3}
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
                            type="submit"
                            className="flex justify-center items-center gap-x-2 w-full py-2 px-6 text-[20px] text-white bg-green-600 enabled:hover:bg-green-700"
                        >
                            <FaShoppingCart className="text-[24px]" />
                            <span>Purchase Course</span>
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PurchasePage;
