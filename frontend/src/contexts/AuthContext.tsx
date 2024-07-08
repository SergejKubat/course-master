import { useState, useEffect, useContext, createContext, ReactNode } from "react";

import { useNavigate } from "react-router-dom";

import IAccountResponse from "../models/responses/IAccountResponse";
import ILoginRequest from "../models/requests/ILoginRequest";
import ILoginResponse from "../models/responses/ILoginResponse";

export interface IAuthContext {
    authenticated: boolean;
    account: IAccountResponse | null;
    token: string | null;
    loading: boolean;
    getAccount: (token: string) => Promise<any>;
    refreshAccount: () => Promise<any>;
    login: (request: ILoginRequest) => Promise<ILoginResponse>;
    logout: () => void;
    authFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [account, setAccount] = useState<IAccountResponse | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const getAccount = async (token: string) => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/accounts/me`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.ok) {
            const account = await response.json();

            return account;
        }

        return null;
    };

    const refreshAccount = async () => {
        if (token) {
            const account = await getAccount(token);

            setAccount(account);
        }
    };

    const login = async (loginRequest: ILoginRequest) => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginRequest)
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("token", data.token);

            const accountData = await getAccount(data.token);

            if (accountData) {
                setAccount(accountData);
                setToken(data.token);
            }
        } else {
            throw new Error(data.message);
        }

        return data;
    };

    const logout = (): void => {
        localStorage.removeItem("token");

        setAccount(null);
        setToken(null);
    };

    const authFetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
        const newInit = { ...init };

        const requestHeaders: HeadersInit = new Headers(newInit.headers);

        requestHeaders.set("Authorization", "Bearer " + token);

        if (requestHeaders.get("Content-Type") == null) {
            requestHeaders.set("Content-Type", "application/json");
        }

        newInit.headers = requestHeaders;

        const response = await fetch(input, newInit);

        if (response.status === 401 || response.status === 403) {
            //logout();
            throw new Error("Authorization failed.");
        }

        return response;
    };

    const refresh = async () => {
        const _token = localStorage.getItem("token");

        setToken(_token);

        if (_token) {
            const accountData = await getAccount(_token);

            if (accountData) {
                setLoading(false);
                setAccount(accountData);
            } else {
                logout();
            }
        }

        setLoading(false);
    };

    useEffect(() => {
        refresh().then();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authenticated: !!account,
                account,
                token,
                loading,
                getAccount,
                refreshAccount,
                login,
                logout,
                authFetch
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();

    const { authenticated, loading } = useContext(AuthContext);

    useEffect(() => {
        if (!loading && !authenticated) {
            navigate("/login");
        }
    }, [loading, authenticated]);

    if (loading || !authenticated) return <p className="text-[24px] text-white">Loading...</p>;

    return children;
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
