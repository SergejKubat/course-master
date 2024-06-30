import { useParams } from "react-router-dom";

const AccountPage = () => {
    const { accountId } = useParams();

    return (
        <section className="p-5">
            <h1 className="font-bold text-3xl text-center">Account Page</h1>
            <p className="text-center">Id: {accountId}</p>
        </section>
    );
};

export default AccountPage;
