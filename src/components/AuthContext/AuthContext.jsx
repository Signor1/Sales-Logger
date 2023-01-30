import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useCookies, Cookies } from 'react-cookie';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [user, setUser] = useState(null);

    const [sales, setSales] = useState(null)

    //login
    const login = (data) => {
        setUser(data);
        setCookie("SalesUser", data, { path: "/" });
        setCookie("SalesLogin", data, { path: "/" });

        toast.success('Login Successful!', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigate('/dashboard');
    }


    //login
    const logout = () => {
        setUser(null);
        removeCookie("SalesLogin", { path: "/" });
        setSales(null)

        toast.success('Logout Successful!', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigate('/');
    }

    const updateSales = (data) => {
        setSales(data);
    }

    const storeData = () => {
        const cookie = new Cookies();
        const getLogger = cookie.get("SalesLogin");
        const loggerEmail = getLogger.email;

        setCookie(loggerEmail, sales, { path: "/" })
        toast.success('Data Saved!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    const deleteTable = () => {
        setSales(null)
        toast.success('Table Deleted!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    // useEffect(() => {
    //     setCookie(loggerEmail, sales, { path: "/" });
    // }, [sales.length, loggerEmail, sales, setCookie]);

    return <AuthContext.Provider value={{ user, cookies, sales, setSales, setUser, login, logout, updateSales, storeData, deleteTable }}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext);
}