import { useState, FormEvent } from "react";

import Input from "../../components/form/Input";
import Button from "../../components/form/Button";

import { validatePassword } from "../../utils/validation";

import IChangePasswordRequest from "../../models/requests/IChangePasswordRequest";

const AccountSecurity = () => {
    const [oldPassword, setOldPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    //const [error, setError] = useState<string>("");
    const [touched, setTouched] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const validateForm = () => {
        if (!validatePassword(oldPassword)) {
            return false;
        }

        if (!validatePassword(newPassword)) {
            return false;
        }

        return true;
    };

    const changePassword = async (e: FormEvent) => {
        e.preventDefault();

        setTouched(true);

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        const data: IChangePasswordRequest = {
            oldPassword: oldPassword,
            newPassword: newPassword
        };

        console.log(data);
    };

    return (
        <div className="p-5 border border-gray-300 rounded-3xl">
            <h2 className="mb-8 font-semibold text-[24px] text-center">Change Password</h2>
            <form className="w-[320px] mx-auto xs:w-[376px]" onSubmit={changePassword}>
                <label htmlFor="oldPasswordInput" className="block mb-2 font-medium text-sm">
                    Old password
                </label>
                <Input
                    id="oldPasswordInput"
                    type="password"
                    placeholder="Enter old password"
                    touched={touched}
                    value={oldPassword}
                    errorMessage="Password is not valid."
                    className="w-full"
                    validation={(value) => validatePassword(value)}
                    onChange={setOldPassword}
                />

                <label htmlFor="newPasswordInput" className="block my-2 font-medium text-sm">
                    New password
                </label>
                <Input
                    id="newPasswordInput"
                    type="password"
                    placeholder="Enter new password"
                    touched={touched}
                    value={newPassword}
                    errorMessage="Password is not valid."
                    className="w-full"
                    validation={(value) => validatePassword(value)}
                    onChange={setNewPassword}
                />

                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-5 mb-3 px-4 text-[16px] text-white bg-blue-500 enabled:hover:bg-blue-600 disabled:bg-blue-600"
                >
                    {loading ? "Changing Password..." : "Change Password"}
                </Button>

                {/* {error ? <p className="mt-5 text-sm text-center text-red-700">{error}</p> : null} */}
            </form>
        </div>
    );
};

export default AccountSecurity;
