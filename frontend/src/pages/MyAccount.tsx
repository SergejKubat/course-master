import { useEffect, useState } from "react";

import { enqueueSnackbar } from "notistack";

import { useAuth } from "../contexts/AuthContext";

import AccountDetails from "../layouts/account/AccountDetails";
import AccountPreferences from "../layouts/account/AccountPreferences";
import AccountSecurity from "../layouts/account/AccountSecurity";

import Spinner from "../components/Spinner";

import { uploadFile } from "../utils/file";

import IUpdateAccountRequest from "../models/requests/IUpdateAccountRequest";

const MyAccountPage = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [occupation, setOccupation] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [avatar, setAvatar] = useState<string | File>("");
    const [touched, setTouched] = useState<boolean>(false);
    const [updating, setUpdating] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const { account, token, refreshAccount, authFetch } = useAuth();

    const validateForm = (): boolean => {
        if (firstName.length < 3) {
            return false;
        }

        if (lastName.length < 3) {
            return false;
        }

        return true;
    };

    const saveChanges = async () => {
        setTouched(true);

        if (!validateForm()) {
            return;
        }

        setUpdating(true);

        let avatarUrl: string;

        // check if avatar has been changed
        if (avatar instanceof File) {
            avatarUrl = await uploadFile(avatar, token!);
        } else {
            avatarUrl = avatar;
        }

        const updateAccountRequest: IUpdateAccountRequest = {
            firstName: firstName,
            lastName: lastName,
            occupation: occupation,
            description: description,
            avatar: avatarUrl
        };

        try {
            await authFetch(`${import.meta.env.VITE_API_BASE_URL}/accounts/me`, {
                method: "PUT",
                body: JSON.stringify(updateAccountRequest)
            });

            await refreshAccount();

            enqueueSnackbar("Account details are successfully updated.", { variant: "success" });
        } catch (error: any) {
            enqueueSnackbar(error.message, { variant: "error" });
        }

        setUpdating(false);
    };

    useEffect(() => {
        if (account) {
            setFirstName(account.firstName);
            setLastName(account.lastName);
            setOccupation(account.occupation);
            setDescription(account.description);
            setAvatar(account.avatar);

            // ensure state update
            setTimeout(() => {
                setLoading(false);
            }, 100);
        }
    }, [account]);

    if (loading) return <Spinner />;

    return (
        <section className="flex flex-col gap-y-10 p-5">
            <AccountDetails
                username={account!.username}
                avatar={avatar}
                setAvatar={setAvatar}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                email={account!.email}
                occupation={occupation}
                setOccupation={setOccupation}
                description={description}
                setDescription={setDescription}
                touched={touched}
                updating={updating}
                saveChanges={saveChanges}
            />
            <AccountPreferences />
            <AccountSecurity />
        </section>
    );
};

export default MyAccountPage;
