import { useState, FormEvent } from "react";

import { useFlag } from "@unleash/proxy-client-react";
import { enqueueSnackbar } from "notistack";

import { useAuth } from "../../contexts/AuthContext";

import Input from "../../components/form/Input";
import Button from "../../components/form/Button";

import { validatePassword, validateStrongPassword } from "../../utils/validation";

import IChangePasswordRequest from "../../models/requests/IChangePasswordRequest";

import { STRONG_PASSWORD_POLICY } from "../../constants";

const AccountSecurity = () => {
    const [oldPassword, setOldPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [touched, setTouched] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const { authFetch, logout } = useAuth();

    const strongPasswordPolicyEnabled = useFlag(STRONG_PASSWORD_POLICY);

    const validateForm = () => {
        if (strongPasswordPolicyEnabled) {
            if (!validateStrongPassword(oldPassword)) {
                return false;
            }
        } else {
            if (!validatePassword(oldPassword)) {
                return false;
            }
        }

        if (strongPasswordPolicyEnabled) {
            if (!validateStrongPassword(newPassword)) {
                return false;
            }
        } else {
            if (!validatePassword(newPassword)) {
                return false;
            }
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

        const changePasswordRequest: IChangePasswordRequest = {
            oldPassword: oldPassword,
            newPassword: newPassword
        };

        const response = await authFetch(`${import.meta.env.VITE_API_BASE_URL}/accounts/change-password`, {
            method: "PUT",
            body: JSON.stringify(changePasswordRequest)
        });

        const data = await response.json();

        if (response.ok) {
            logout();
        } else {
            enqueueSnackbar(data.message, { variant: "error" });
            setLoading(false);
        }
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
                    validation={(value) => (strongPasswordPolicyEnabled ? validateStrongPassword(value) : validatePassword(value))}
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
                    validation={(value) => (strongPasswordPolicyEnabled ? validateStrongPassword(value) : validatePassword(value))}
                    onChange={setNewPassword}
                />

                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-5 mb-3 px-4 text-[16px] text-white bg-blue-500 enabled:hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? "Changing Password..." : "Change Password"}
                </Button>
            </form>
        </div>
    );
};

export default AccountSecurity;
