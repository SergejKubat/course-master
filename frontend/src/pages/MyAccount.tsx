import { useEffect, useState } from "react";

import { useAuth } from "../contexts/AuthContext";

import AccountDetails from "../layouts/account/AccountDetails";
import AccountSecurity from "../layouts/account/AccountSecurity";

import IUpdateAccountRequest from "../models/requests/IUpdateAccountRequest";

const MyAccountPage = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [occupation, setOccupation] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [avatar, setAvatar] = useState<string | File>("");
    const [touched, setTouched] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const { account } = useAuth();

    const validateForm = (): boolean => {
        if (firstName.length < 3) {
            return false;
        }

        if (lastName.length < 3) {
            return false;
        }

        if (occupation.length < 3) {
            return false;
        }

        if (description.length < 3) {
            return false;
        }

        return true;
    };

    const saveChanges = () => {
        setTouched(true);

        if (!validateForm()) {
            return;
        }

        // check if avatar has been changed
        if (avatar instanceof File) {
            updateAvatar(avatar);
        }

        setLoading(true);

        const data: IUpdateAccountRequest = {
            firstName: firstName,
            lastName: lastName,
            occupation: occupation,
            description: description,
            avatar: "avatar"
        };

        console.log(data);
    };

    const updateAvatar = async (avatar: File) => {
        const data = new FormData();

        data.append("file", avatar);

        console.log(data);
    };

    useEffect(() => {
        if (account) {
            setFirstName(account.firstName);
            setLastName(account.lastName);
            setOccupation(account.occupation);
            setDescription(account.description);
            setAvatar(account.avatar);
        }
    }, [account]);

    return (
        <section className="flex flex-col gap-y-10 p-5">
            <AccountDetails
                username="username"
                avatar={avatar}
                setAvatar={setAvatar}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                email="test@test.com"
                occupation={occupation}
                setOccupation={setOccupation}
                description={description}
                setDescription={setDescription}
                touched={touched}
                loading={loading}
                saveChanges={saveChanges}
            />
            <AccountSecurity />
        </section>
    );
};

export default MyAccountPage;
