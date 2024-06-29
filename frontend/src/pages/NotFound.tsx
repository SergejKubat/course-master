import { useNavigate } from "react-router-dom";

import Button from "../components/form/Button";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col items-center mt-10">
            <h1 className="font-semibold text-[64px]">Oops!</h1>
            <p className="mt-5 text-[24px]">Sorry, an unexpected error has occurred.</p>
            <p className="mt-5 text-[24px] italic">
                Error <span className="text-red-500">404</span>. Page not found.
            </p>
            <Button className="mt-5 text-[20px] bg-red-500 hover:bg-red-600" onClick={() => navigate(-1)}>
                Go Back
            </Button>
        </section>
    );
};

export default NotFoundPage;
